from flask import Flask, request
from flask_cors import CORS
from uuid import uuid4
import time
from pymongo import MongoClient
import random

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
            temp  = chr(random.randint(65, 90))
            generated_password.append(temp)


    # convert list to string
    final_password = ''
    for character in generated_password:
        if ord(character) in range(65, 91) or ord(character) in range(97, 123) or ord(character) in range(48, 58):
            final_password += character

    return str(final_password)
        


def get_mongo_handle():
    try:
        mongo_client = MongoClient('mongodb+srv://Aaryadev:aurora1127@cluster0.jvar5.mongodb.net/lace?retryWrites=true&w=majority')
        db = mongo_client.get_database('lace').get_collection('users')
        return db
    except:
        return -1

def get_current_unix_millis():
    return int(time.time() * 1000)


def create_lace_user_account(self, first_name, last_name, title_in_organisation):

    try:
        self.account_uuid = str(uuid4())
        self._account_first_name = first_name
        self._account_last_name = last_name
        self.title_in_organisation = title_in_organisation
        self.account_creation_timestamp = get_current_unix_millis()        

        # database operations

        origin_password = password_generator(self.account_uuid, self.account_creation_timestamp, self._account_first_name)

        db = get_mongo_handle()
        res = db.insert_one({
            "account_uuid": self.account_uuid,
            "account_first_name": self._account_first_name,
            "account_last_name": self._account_last_name,
            "title_in_organisation": self.title_in_organisation,
            "account_creation_timestamp": self.account_creation_timestamp,
            "account_password": str(origin_password)
        })


        if ( res == None ):

            return -1
        else:
            return 1, {
                'account_uuid': self.account_uuid,
                'account_password':  str(origin_password) #TODO
            }
    except Exception as e:
        print(e)

        return -1
        



global current_session_uids


def get_session_uid(account_uuid, account_creation_timestamp, account_first_name, account_password):
    try:
        db = get_mongo_handle()
        res = db.find_one({
            "account_uuid": account_uuid
        })
        if res != None and str(account_password) == str(password_generator(account_uuid, account_creation_timestamp, account_first_name)):
            session_uuid = uuid4()
            current_session_uids.append(session_uuid)
            return session_uuid
        else:
            return -1
    except:
        return -1



# use deets to login to account
# on logging in you get session uid, that you can use to access the apis
@app.route('/lace/signup', methods=["GET", "POST"])
def signup():

    user_data_received = request.get_json()
    print(user_data_received)

    lace_user_account = create_lace_user_account(user_data_received['account_first_name'], user_data_received['account_last_name'], user_data_received['title_in_organisation'])

    print(lace_user_account)
    if str(lace_user_account) == str(-1):
        return str(-1)
    else:
        return str(lace_user_account)

@app.route('/lace/delete', methods=["GET", "POST" ])
def delete_account():

    try:
        json_data_received = request.get_json()

        db = get_mongo_handle()
        res = db.delete_one({
            "account_uuid": str(json_data_received['account_uuid'])
        })

        if res  == None:
            return -1
        
        else:
            return 1

    except Exception as e:
        print(e)
        return -1




if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")