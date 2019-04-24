
import * as express from 'express'
// import accountsRouter from './accounts'
import * as auth from './auth'
// import userRouter from './user'
// import inviteUser from './inviteUser'
// import organisationRouter from './organisation'
// import getUserList from './userList'

const router = express.Router({ mergeParams: true })

router.use('/logout', auth.logout)
// router.use('/organisation', organisationRouter)
// router.use('/accounts', accountsRouter)
// router.use('/user', userRouter)
// router.use('/inviteUser', inviteUser)
// router.use('/userList', getUserList)
router.use('/data/internal/case-types/TestAddressBookCase/event-triggers/createCase?ignore-warning=false', dummyReturn)
router.use('/data/internal/profile', dummyReturnProfile)


async function dummyReturn(req, res) {
  res.send({"id":"createCase","name":"Create solicitor draft","description":"Create solicitor draft","case_id":null,"show_summary":true,"case_fields":[{"id":"PetitionerCurrentAddressLabel","label":"Petitioner current address","hidden":false,"value":null,"hint_text":null,"field_type":{"id":"Label","type":"Label","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"validation_expr":null,"security_label":"PUBLIC","order":1,"display_context":"READONLY","show_condition":null,"show_summary_change_option":false},{"id":"HouseFlatNumber","label":"House / flat number","hidden":false,"value":null,"hint_text":null,"field_type":{"id":"Text","type":"Text","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"validation_expr":null,"security_label":"PUBLIC","order":2,"display_context":"OPTIONAL","show_condition":null,"show_summary_change_option":false},{"id":"CantProvideNationalInsuranceNumber","label":"Why can’t you provide a National Insurance number? ","hidden":false,"value":null,"hint_text":null,"field_type":{"id":"TextArea","type":"TextArea","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"validation_expr":null,"security_label":"PUBLIC","order":2,"display_context":"OPTIONAL","show_condition":null,"show_summary_change_option":false},{"id":"HouseFlatPostcode","label":"Postcode","hidden":false,"value":null,"hint_text":null,"field_type":{"id":"Postcode","type":"Postcode","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"validation_expr":null,"security_label":"PUBLIC","order":3,"display_context":"OPTIONAL","show_condition":null,"show_summary_change_option":false},{"id":"IsAddressForService","label":"Is this the petitioner’s address for service?","hidden":false,"value":null,"hint_text":null,"field_type":{"id":"YesOrNo","type":"YesOrNo","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"validation_expr":null,"security_label":"PUBLIC","order":4,"display_context":"OPTIONAL","show_condition":null,"show_summary_change_option":false},{"id":"PetitionerServiceAddress","label":"Petitioner service address","hidden":null,"value":null,"hint_text":null,"field_type":{"id":"Address","type":"Complex","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[{"id":"HouseFlatNumber2","label":"House / flat number","hidden":false,"value":null,"hint_text":null,"field_type":{"id":"Text","type":"Text","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"validation_expr":null,"security_label":"PUBLIC","order":2,"display_context":"OPTIONAL","show_condition":null,"show_summary_change_option":false},{"id":"HouseFlatPostcode2","label":"Postcode","hidden":false,"value":null,"hint_text":null,"field_type":{"id":"Postcode","type":"Postcode","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"validation_expr":null,"security_label":"PUBLIC","order":3,"display_context":"OPTIONAL","show_condition":null,"show_summary_change_option":false}],"collection_field_type":null},"validation_expr":null,"security_label":"PRIVATE","order":null,"display_context":"OPTIONAL","show_condition":null,"show_summary_change_option":true},{"id":"PersonFirstName","label":"First Name","hidden":false,"value":"Fred","hint_text":null,"field_type":{"id":"Text","type":"Text","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"validation_expr":null,"security_label":"RESTRICTED","order":null,"display_context":"OPTIONAL","show_condition":null,"show_summary_change_option":true},{"id":"PersonLastNameWithValidation","label":"Last Name","hidden":false,"value":"Doe","hint_text":null,"field_type":{"id":"Text","type":"Text","min":3,"max":20,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"validation_expr":null,"security_label":"PRIVATE","order":null,"display_context":"OPTIONAL","show_condition":null,"show_summary_change_option":true},{"id":"HasOtherInfo","label":"Has Other Info","hidden":null,"value":null,"hint_text":null,"field_type":{"id":"YesOrNo","type":"YesOrNo","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"validation_expr":null,"security_label":"PRIVATE","order":null,"display_context":"OPTIONAL","show_condition":null,"show_summary_change_option":true},{"id":"PersonAddress","label":"Address","hidden":null,"value":null,"hint_text":null,"field_type":{"id":"Address","type":"Complex","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[{"id":"AddressLine1","label":"Address Line 1","hidden":null,"case_type_id":null,"hint_text":null,"value":"dddd","field_type":{"id":"Text","type":"Text","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"security_classification":"RESTRICTED","live_from":null,"live_until":null},{"id":"AddressLine22","label":"Address","hidden":null,"value":null,"hint_text":null,"field_type":{"id":"Address","type":"Complex","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[{"id":"AddressLine12","label":"Address Line 1","hidden":null,"case_type_id":null,"hint_text":null,"value":"dddd","field_type":{"id":"Text","type":"Text","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"security_classification":"RESTRICTED","live_from":null,"live_until":null},{"id":"AddressLine22","label":"Address Line 2","hidden":null,"case_type_id":null,"hint_text":null,"value":"sss","field_type":{"id":"Text","type":"Text","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"security_classification":"PRIVATE","live_from":null,"live_until":null},{"id":"AddressLine32","label":"Address Line 3","hidden":null,"case_type_id":null,"hint_text":null,"value":"ddddtttt","field_type":{"id":"Text","type":"Text","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"show_condition":"Country2=\"UK\"","security_classification":"PRIVATE","live_from":null,"live_until":null},{"id":"Country2","label":"Country","hidden":null,"case_type_id":null,"hint_text":null,"value":"UK","field_type":{"id":"Text","type":"Text","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"security_classification":"RESTRICTED","live_from":null,"live_until":null},{"id":"Postcode2","label":"Postcode","hidden":null,"case_type_id":null,"hint_text":null,"value":"pppp","field_type":{"id":"Postcode","type":"Postcode","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"security_classification":"PRIVATE","live_from":null,"live_until":null}],"collection_field_type":null},"validation_expr":null,"security_label":"PRIVATE","order":null,"display_context":"OPTIONAL","show_condition":"Country=\"UK\"","show_summary_change_option":true},{"id":"AddressLine3","label":"Address Line 3","hidden":null,"case_type_id":null,"hint_text":null,"value":"ddddtttt","field_type":{"id":"Text","type":"Text","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"show_condition":null,"security_classification":"PRIVATE","live_from":null,"live_until":null},{"id":"Country","label":"Country","hidden":null,"case_type_id":null,"hint_text":null,"value":"UK","field_type":{"id":"Text","type":"Text","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"security_classification":"RESTRICTED","live_from":null,"live_until":null},{"id":"Postcode","label":"Postcode","hidden":null,"case_type_id":null,"hint_text":null,"value":"pppp","field_type":{"id":"Postcode","type":"Postcode","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"security_classification":"PRIVATE","live_from":null,"live_until":null}],"collection_field_type":null},"validation_expr":null,"security_label":"PRIVATE","order":null,"display_context":"OPTIONAL","show_condition":"PersonLastNameWithValidation=\"Doe\"","show_summary_change_option":true},{"id":"Bilingual","label":"Bilingual","hidden":null,"value":null,"hint_text":null,"field_type":{"id":"YesOrNo","type":"YesOrNo","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"validation_expr":null,"security_label":"PRIVATE","order":null,"display_context":"OPTIONAL","show_condition":null,"show_summary_change_option":true},{"id":"DateOfBirth","label":"Date of Birth","hidden":null,"value":null,"hint_text":"For example, 31 3 1980","field_type":{"id":"Date","type":"Date","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"validation_expr":null,"security_label":"PRIVATE","order":null,"display_context":"OPTIONAL","show_condition":null,"show_summary_change_option":true},{"id":"MarritalStatus","label":"Marrital Status","hidden":null,"value":null,"hint_text":null,"field_type":{"id":"FixedList","type":"FixedList","min":null,"max":null,"regular_expression":null,"fixed_list_items":[{"code":"MARRIAGE","label":"Marriage"},{"code":"CIVIL_PARTNERSHIP","label":"Civil Partnership"},{"code":"SINGLE","label":"Single"},{"code":"WIDOW","label":"Widow"}],"complex_fields":[],"collection_field_type":null},"validation_expr":null,"security_label":"PRIVATE","order":null,"display_context":"OPTIONAL","show_condition":null,"show_summary_change_option":true},{"id":"WhatNationality","label":"What is your nationality? ","hidden":null,"value":null,"hint_text":null,"field_type":{"id":"MultiSelectList","type":"MultiSelectList","min":null,"max":null,"regular_expression":null,"fixed_list_items":[{"code":"British","label":"British (including English, Scottish, Welsh and Northern Irish)"},{"code":"Irish","label":"Irish"},{"code":"Other","label":"Citizen of a different country"}],"complex_fields":[],"collection_field_type":null},"validation_expr":null,"security_label":"PRIVATE","order":null,"display_context":"OPTIONAL","show_condition":null,"show_summary_change_option":true},{"id":"ContactEmail","label":"Contact email","hidden":null,"value":null,"hint_text":null,"field_type":{"id":"Email","type":"Email","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"validation_expr":null,"security_label":"PRIVATE","order":null,"display_context":"OPTIONAL","show_condition":null,"show_summary_change_option":true},{"id":"WhatIsYourAge","label":"What is your age?","hidden":null,"value":null,"hint_text":null,"field_type":{"id":"Number","type":"Number","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"validation_expr":null,"security_label":"PRIVATE","order":null,"display_context":"OPTIONAL","show_condition":null,"show_summary_change_option":true},{"id":"YourPhoneUk","label":"What is your phone number?","hidden":null,"value":null,"hint_text":null,"field_type":{"id":"PhoneUK","type":"PhoneUK","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"validation_expr":null,"security_label":"PRIVATE","order":null,"display_context":"OPTIONAL","show_condition":null,"show_summary_change_option":true},{"id":"TotalMonthlyIncome","label":"Total monthly income","hidden":null,"value":null,"hint_text":null,"field_type":{"id":"MoneyGBP","type":"MoneyGBP","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"validation_expr":null,"security_label":"PRIVATE","order":null,"display_context":"OPTIONAL","show_condition":null,"show_summary_change_option":true},{"id":"DocumentUpload","label":"Document upload","hidden":null,"value":{"document_url":"https://documentLocation/documents/6ed8ff37-2a40-4766-abd5-c33ef5abe13f","document_binary_url":"https://documentLocation/documents/6ed8ff37-2a40-4766-abd5-c33ef5abe13f/binary","document_filename":"Example_evidence.xyz"},"hint_text":null,"field_type":{"id":"Document","type":"Document","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"validation_expr":null,"security_label":"PRIVATE","order":null,"read_only":false,"show_condition":null,"show_summary_change_option":true},{"id":"Group","label":"Group","hidden":null,"value":null,"hint_text":null,"field_type":{"id":"Person","type":"Collection","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":{"id":"Person","type":"Complex","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[{"id":"Title","label":"Title","hidden":null,"case_type_id":null,"hint_text":null,"field_type":{"id":"Text","type":"Text","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"security_classification":"PUBLIC","live_from":null,"live_until":null},{"id":"FirstName","label":"First Name","hidden":null,"case_type_id":null,"hint_text":null,"field_type":{"id":"Text","type":"Text","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"security_classification":"RESTRICTED","live_from":null,"live_until":null},{"id":"MiddleName","label":"Middle Name","hidden":null,"case_type_id":null,"hint_text":null,"field_type":{"id":"Text","type":"Text","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"security_classification":"PRIVATE","live_from":null,"live_until":null},{"id":"LastName","label":"Last Name","hidden":null,"case_type_id":null,"hint_text":null,"field_type":{"id":"Text","type":"Text","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"security_classification":"PUBLIC","live_from":null,"live_until":null},{"id":"DateOfBirth","label":"Date Of Birth","hidden":null,"case_type_id":null,"hint_text":"For example, 31 3 1980","field_type":{"id":"Date","type":"Date","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"security_classification":"RESTRICTED","live_from":null,"live_until":null},{"id":"NationalInsuranceNumber","label":"National Insurance number","hidden":null,"case_type_id":null,"hint_text":"It's on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.","field_type":{"id":"Text","type":"Text","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null},"security_classification":"PRIVATE","live_from":null,"live_until":null}],"collection_field_type":null}},"validation_expr":null,"security_label":"PRIVATE","order":null,"display_context":"OPTIONAL","show_condition":null,"show_summary_change_option":true},{"id":"ExamplesCollection","label":"Collection","hidden":null,"value":null,"hint_text":null,"field_type":{"id":"ExamplesCollection","type":"Collection","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":{"id":"TextArea","type":"TextArea","min":null,"max":null,"regular_expression":null,"fixed_list_items":[],"complex_fields":[],"collection_field_type":null}},"acls":[{"role":"case-worker","create":true,"read":true,"update":true,"delete":false}],"validation_expr":null,"security_label":"PRIVATE","order":null,"display_context":"OPTIONAL","display_context_parameter":null,"show_condition":null,"show_summary_change_option":true,"show_summary_content_option:":null},{"id":"PersonOrderSummary","label":"Order Summary","field_type":{"id":"OrderSummary","type":"Complex","complex_fields":[{"id":"PaymentReference","label":"Payment Reference","field_type":{"id":"Text","type":"Text"}},{"id":"PaymentTotal","label":"Total","field_type":{"id":"MoneyGBP","type":"MoneyGBP"}},{"id":"Fees","label":"Fees","field_type":{"id":"FeesList","type":"Collection","collection_field_type":{"id":"Fee","type":"Complex","complex_fields":[{"id":"FeeCode","label":"Fee Code","field_type":{"id":"Text","type":"Text"}},{"id":"FeeDescription","label":"Fee Description","field_type":{"id":"Text","type":"Text"}},{"id":"FeeAmount","label":"Fee Amount","field_type":{"id":"MoneyGBP","type":"MoneyGBP"},"security_classification":"PUBLIC"},{"id":"FeeVersion","label":"Fee Version","field_type":{"id":"Text","type":"Text"},"security_classification":"PUBLIC"}]}}}]},"order":null,"value":{"PaymentReference":"RC-1521-1095-0964-3143","Fees":[{"value":{"FeeAmount":"4545","FeeCode":"FEE0001","FeeDescription":"First fee description","FeeVersion":"1"}},{"value":{"FeeAmount":"0455","FeeCode":"FEE0002","FeeDescription":"Second fee description","FeeVersion":"1"}},{"value":{"FeeAmount":"7055","FeeCode":"FEE0003","FeeDescription":"Third fee description","FeeVersion":"1"}}],"PaymentTotal":"5000"}}],"event_token":"eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJnZTllbTdwZ3ZiNmM4NWMxcG85aXE0b3JwcCIsInN1YiI6Ijk0OCIsImlhdCI6MTUwOTQ2MTY3NiwiZXZlbnQtaWQiOiJjcmVhdGVDYXNlIiwiY2FzZS10eXBlLWlkIjoiVGVzdEFkZHJlc3NCb29rQ2FzZSIsImp1cmlzZGljdGlvbi1pZCI6IlRFU1QiLCJjYXNlLXZlcnNpb24iOiJiZjIxYTllOGZiYzVhMzg0NmZiMDViNGZhMDg1OWUwOTE3YjIyMDJmIn0.VTXhC2-FnlAVVvq9gsKFglvaBM-s-mrXtRLN6ZwLdfk","wizard_pages":[{"id":"createCaseStartPage","label":"Required Information1","order":1,"show_condition":"","wizard_page_fields":[{"case_field_id":"HasOtherInfo","order":1,"page_column_no":1,"display_context":"OPTIONAL"}]},{"id":"createCaseInfoPage","label":"Required Information2","order":2,"show_condition":"","wizard_page_fields":[{"case_field_id":"PersonFirstName","order":1,"page_column_no":1,"display_context":"OPTIONAL"},{"case_field_id":"PetitionerCurrentAddressLabel","order":2,"page_column_no":1,"display_context":"READONLY"},{"case_field_id":"HouseFlatNumber","order":3,"page_column_no":1,"display_context":"OPTIONAL"},{"case_field_id":"PersonLastNameWithValidation","order":4,"page_column_no":1,"display_context":"OPTIONAL"},{"case_field_id":"HouseFlatPostcode","order":5,"page_column_no":null,"display_context":"OPTIONAL"},{"case_field_id":"IsAddressForService","order":6,"page_column_no":null,"display_context":"OPTIONAL"},{"case_field_id":"PetitionerServiceAddress","order":7,"page_column_no":null,"display_context":"OPTIONAL"},{"case_field_id":"DateOfBirth","order":8,"page_column_no":null,"display_context":"OPTIONAL"},{"case_field_id":"MarritalStatus","order":9,"page_column_no":2,"display_context":"OPTIONAL"},{"case_field_id":"ContactEmail","order":9,"page_column_no":2,"display_context":"OPTIONAL"},{"case_field_id":"WhatIsYourAge","order":10,"page_column_no":2,"display_context":"OPTIONAL"},{"case_field_id":"YourPhoneUk","order":11,"page_column_no":null,"display_context":"OPTIONAL"},{"case_field_id":"TotalMonthlyIncome","order":12,"page_column_no":null,"display_context":"OPTIONAL"},{"case_field_id":"DocumentUpload","order":12,"page_column_no":null,"display_context":"OPTIONAL"},{"case_field_id":"CantProvideNationalInsuranceNumber","order":13,"page_column_no":null,"display_context":"OPTIONAL"},{"case_field_id":"WhatNationality","order":14,"page_column_no":null,"display_context":"OPTIONAL"},{"case_field_id":"ExamplesCollection","order":15,"page_column_no":null,"display_context":"OPTIONAL"},{"case_field_id":"PersonOrderSummary","order":16,"page_column_no":null,"display_context":"OPTIONAL"}]},{"id":"createCaseAdditionalInfoPage2","label":"Address Additional Info Page 2","order":3,"show_condition":"","wizard_page_fields":[{"case_field_id":"ContactEmail","order":1,"page_column_no":1,"display_context":"OPTIONAL"}]}],"_links":{"self":{"href":"http://localhost:8080/internal/cases/1543420570779902/event-triggers/UPDATE{?ignore-warning}"}}})
}
async function dummyReturnProfile(req, res) {
  res.send({"user":{"idam":{"id":42,"email":"case-worker@hmcts.net","first_name":"Case","last_name":"Worker","roles":["case-worker"]}},"channels":["channel1"],"jurisdictions":[{"id":"TEST","name":"Test","description":"Content for the Test Jurisdiction.","caseTypes":[{"id":"TestAddressBookCase","name":"Test Address Book Case","description":"Test Address Book Case","states":[{"id":"CaseCreated","name":"Case created","description":null},{"id":"CaseEnteredIntoLegacy","name":"Case has been Entered into Legacy","description":null},{"id":"CaseStopped","name":"Put case on hold","description":null}]},{"id":"TestComplexAddressBookCase","name":"Complex Address Book Case","description":"Complex Address Book Case","states":[{"id":"CaseCreated","name":"Complex Case created","description":null},{"id":"CaseEnteredIntoLegacy","name":"Complex Case has been Entered into Legacy","description":null},{"id":"CaseStopped","name":"Put Complex case on hold","description":null}]}]},{"id":"PROBATE","name":"Manage probate application","description":"Services (grant of representation, caveats, will lodgment, standing search, settlers, pre lodgement)","caseTypes":[{"id":"GrantOfRepresentation","name":"Grant of Representation","description":"Probate - Grant of Representation","states":[{"id":"SolAppCreated","name":"Application created","description":"Application created (Solicitor)"},{"id":"SolAppUpdated","name":"Application updated","description":"Application updated (Solicitor)"},{"id":"SolAppConfirmed","name":"Application confirmed","description":"Application confirmed (Solicitor)"},{"id":"CaseCreated","name":"Case created","description":"Case created"},{"id":"CasePrinted","name":"Case printed","description":"Case printed"},{"id":"Stopped","name":"Stopped","description":"Stopped"}]}]},{"id":"DIVORCE","name":"Family Divorce","description":"Family Divorce: Dissolution of Marriage","caseTypes":[{"id":"FinancialRemedyMVP2","name":"Financial Remedy MVP_v0.3","description":"Financial Remedy MVP_v0.3","states":[{"id":"caseAdded","name":"Application Draft Added","description":null},{"id":"orderAccepted","name":"Order Accepted","description":null},{"id":"orderRejected","name":"Order Rejected","description":null}]}]}],"default":{"workbasket":{"jurisdiction_id":"TEST","case_type_id":"TestAddressBookCase","state_id":"CaseCreated"}}})
}

export default router