// Token info nested_get_nonce
var token_information = {
  "key": "%globals_asset_metadata_gecko.key:540200%",
  "secret": "%globals_asset_metadata_gecko.secret:540200%",
  "nonce": %globals_get_nonce%
};
//form data
var intended_parameters;
var formid = '%globals_asset_parent^as_asset:asset_assetid%';
if (formid == '536480') {
    //course transfer
    intended_parameters = {
        %globals_asset_contents_raw:542446%
    };
}
if (formid == '536483') {
    //module ammendment
    intended_parameters = {
        %globals_asset_contents_raw:542442%
    };
}
if (formid == '536486') {
    //leave of absence
    intended_parameters = {
        %globals_asset_contents_raw:542438%
    };
}
if (formid == '536489') {
    //withdrawl
    intended_parameters = {
        %globals_asset_contents_raw:542391%
    };
}
/*var intended_parameters = {
  "form_id": 819,
  "uuid": "FOEU02eeJq9T6xJE",
  "fields": {
    "field8727": "%globals_get_submission^as_asset:question_answer_536499_q1%",
    "field8728": "%globals_get_submission^as_asset:question_answer_536499_q22%"
  }
}*/
// Add the nonce and key to the parameters (NOT the secret)
intended_parameters.key     = token_information.key;
intended_parameters.nonce   = token_information.nonce;
// JSON encode the intended parameters for sending to the API
var json_body = intended_parameters;
// Append the secret to the JSON for generating the signature
var sign_str = JSON.stringify(json_body) + token_information.secret;
// Generate sha256 hash signature
var signature = SHA256.hash(sign_str);
var response = {};
response.json_body = JSON.stringify(json_body);
response.signature = signature;
print(JSON.stringify(response));
