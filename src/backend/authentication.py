from flask import Flask, request, Response
from flask_cors import CORS
from uuid import uuid4
import time
from pymongo import MongoClient
import json
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Access the environment variables
mongo_username = os.getenv("MONGO_USERNAME")
mongo_password = os.getenv("MONGO_PASSWORD")


time.time()

app = Flask(__name__)
CORS(app)


def password_generator(account_uuid, account_creation_timestamp, account_first_name):
    
    generated_password = []

    account_uuid = str(account_uuid)
    account_creation_timestamp = str(account_creation_timestamp)
    for i in range(len(account_creation_timestamp)):
        generated_password.append(account_uuid[i])
        try:
            generated_password.append(account_first_name[int(account_creation_timestamp[i])])
        except:
            generated_password.append(account_creation_timestamp[-1])

    # convert list to string
    final_password = ''
    for character in generated_password:
        if ord(character) in range(65, 91) or ord(character) in range(97, 123) or ord(character) in range(48, 58):
            final_password += character

    return str(final_password)
        


def get_mongo_handle():
    try:
        mongo_client = MongoClient(f'mongodb+srv://{mongo_username}:{mongo_password}@cluster0.jvar5.mongodb.net/lace?retryWrites=true&w=majority')
        db = mongo_client.get_database('lace').get_collection('users')
        return db
    except:
        return -1

def get_current_unix_millis():
    return int(time.time() * 1000)


def create_lace_user_account(first_name, last_name, title_in_organisation):

    try:
        account_uuid = str(uuid4())
        _account_first_name = first_name
        _account_last_name = last_name
        title_in_organisation = title_in_organisation
        account_creation_timestamp = get_current_unix_millis()        

        # database operations

        origin_password = password_generator(account_uuid, account_creation_timestamp, _account_first_name)

        db = get_mongo_handle()
        res = db.insert_one({
            "account_uuid": account_uuid,
            "account_first_name": _account_first_name,
            "account_last_name": _account_last_name,
            "title_in_organisation": title_in_organisation,
            "account_creation_timestamp": account_creation_timestamp,
            "account_password": str(origin_password)
        })


        if ( res == None ):

            return -1
        else:
            response = json.dumps({
                'account_uuid': account_uuid,
                'account_password':  str(origin_password) #TODO
            })
            return response
    except Exception as e:
        print(e)

        return -1
        

current_session_uids = []

# use deets to login to account
# on logging in you get session uid, that you can use to access the apis
@app.route('/lace/signup', methods=["GET", "POST"])
def signup():

    user_data_received = request.get_json()
    print(user_data_received)

    lace_user_account = create_lace_user_account(user_data_received['fname'], user_data_received['lname'], user_data_received['title'])

    print(lace_user_account)
    if str(lace_user_account) == str(-1):
        return str(-1)
    else:
        return str(lace_user_account)



def login_user_account(account_uuid, account_password):
    try:
        db = get_mongo_handle()
        res = db.find_one({
            "account_uuid": account_uuid
        })

        if res != None and (str(account_password) == str(password_generator(account_uuid, res['account_creation_timestamp'], res['account_first_name']))) and (account_uuid not in current_session_uids):
            current_session_uids.append(account_uuid)

            print('*****CURRENT SESSION UUIDS******')
            print(current_session_uids)
            return res
        else:
            return -1
    except:
        return -1

@app.route('/lace/login', methods=["POST"])
def login():
    user_data_received = request.get_json()
    res = login_user_account(user_data_received['uid'], user_data_received['password'])

    return str(res)


@app.route('/lace/logout', methods=["POST"])
def logout():
    logout_data_received = request.get_json()
    try:
        print(f"User UID {logout_data_received['uid']} removed")
        current_session_uids.remove(logout_data_received['uid'])
        print('*****CURRENT SESSION UUIDS******')
        print(current_session_uids)
        return str(1)
    except:
        return str(-1)
    

@app.route('/lace/delete', methods=["GET", "POST" ])
def delete_account():

    try:
        json_data_received = request.get_json()

        db = get_mongo_handle()
        res = db.delete_one({
            "account_uuid": str(json_data_received['account_uuid'])
        })

        if res == None:
            return str(-1)
        
        else:
            return str(1)

    except Exception as e:
        print(e)
        return str(-1)




if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")