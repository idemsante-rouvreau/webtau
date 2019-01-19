/*
 * Copyright 2018 TWO SIGMA OPEN SOURCE, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import deepNestedJson from './deepNestedJson'

export const basicReport = {
    "version": "1.4",
    "summary": {
        "total": 1,
        "passed": 1,
        "failed": 0,
        "skipped": 0,
        "errored": 0,
        "startTime": 1547139662469,
        "stopTime": 1547139662569,
        "duration": 100
    },
    "config": [
        {key: 'env', value: 'dev', source: 'command line'},
        {key: 'url', value: 'https://base', source: 'config file'},
    ],
    "tests": [
        {
            "id": "another.groovy-1",
            "scenario": "customer super read",
            "status": "Passed",
            "fileName": "another.groovy",
            "startTime": 1547139662469,
            "elapsedTime": 82,
            "steps": []
        }
    ],
}

export const withRestDataReport = {
    "version": "1.4",
    "summary": {
        "total": 4,
        "passed": 3,
        "failed": 1,
        "skipped": 0,
        "errored": 0,
        "startTime": 1547139662469,
        "stopTime": 1547139827670,
        "duration": 165201
    },
    "config": [
        {key: 'env', value: 'dev', source: 'command line'},
        {key: 'url', value: 'https://blahlong-url-maybe-need-shortening.com/v1', source: 'config file'},
    ],
    "tests": [
        {
            "id": "another.groovy-1",
            "className": "com.example.tests.rest.AnotherIT",
            "scenario": "customer super read",
            "status": "Passed",
            "fileName": "rest\\springboot\\anotherTest.groovy",
            "startTime": 1534456916484,
            "elapsedTime": 32,
            "httpCalls": [{
                "method": "GET",
                "url": "http://localhost:8080/customers/1",
                "startTime": 1534456916484,
                "elapsedTime": 22,
                "errorMessage": null,
                "mismatches": [],
                "responseType": "application/json;charset=UTF-8",
                "responseStatusCode": 200,
                "requestHeader": [],
                "responseHeader": [{
                    "key": "Transfer-Encoding-LongerKeyLongishSufixLongerKeyLongishSufixLongerKeyLongishSufix",
                    "value": "chunked"
                }, {
                    "key": null,
                    "value": "HTTP/1.1 201"
                }, {
                    "key": "Date",
                    "value": "Tue, 23 Oct 2018 11:01:26 GMT"
                }, {
                    "key": "Content-Type",
                    "value": "application/json;charset=UTF-8"
                }, {
                    "key": "Location",
                    "value": "http://localhost:8080/customers/1"
                }],
                "responseBody": "{\n  \"id\" : 1,\n  \"firstName\" : \"FN\",\n  \"lastName\" : \"LN\",\n  \"_links\" : {\n    \"self\" : {\n      \"href\" : \"http://localhost:8080/customers/1\"\n    },\n    \"customer\" : {\n      \"href\" : \"http://localhost:8080/customers/1\"\n    }\n  }\n}",
                "responseBodyChecks": {
                    "failedPaths": [],
                    "passedPaths": ["root.firstName", "root.lastName"]
                }
            }],
            "steps": [{
                "elapsedTime": 200,
                "message": [{
                    "type": "action",
                    "value": "executed HTTP GET"
                }, {
                    "type": "url",
                    "value": "http://localhost:8080/customers/1"
                }],
                "children": [{
                    "elapsedTime": 50,
                    "message": [{
                        "type": "id",
                        "value": "body"
                    }, {
                        "type": "matcher",
                        "value": "equals {firstName=FN, lastName=LN}\nmatches:\n\nbody.firstName:   actual: \"FN\" <java.lang.String>\n                expected: \"FN\" <java.lang.String>\nbody.lastName:   actual: \"LN\" <java.lang.String>\n               expected: \"LN\" <java.lang.String>"
                    }]
                }, {
                    "elapsedTime": 50,
                    "message": [{
                        "type": "id",
                        "value": "header.statusCode"
                    }, {
                        "type": "matcher",
                        "value": "equals 200\nmatches:\n\nheader.statusCode:   actual: 200 <java.lang.Integer>\n                   expected: 200 <java.lang.Integer>"
                    }]
                }]
            }]
        },
        {
            "id": "customerCrudSeparated.groovy-1",
            "scenario": "customer create",
            "status": "Passed",
            "startTime": 1534456916484,
            "elapsedTime": 283,
            "className": "com.example.tests.rest.CustomerCrudSeparatedIT",
            "fileName": "rest/springboot/customerCrudSeparated.groovy",
            "httpCalls": [{
                "method": "POST",
                "url": "http://localhost:8080/customers/long-url/url-sub-part/and-again/long-url/url-sub-part/and-again/long-url/url-sub-part/and-again/long-url/url-sub-part/and-again/long-url/url-sub-part/and-again/long-url/url-sub-part/and-again",
                "startTime": 1534456916484,
                "elapsedTime": 283,
                "errorMessage": null,
                "mismatches": [],
                "responseType": "application/json;charset=UTF-8",
                "responseStatusCode": 201,
                "responseBody": "{\n  \"id\" : 1,\n  \"FirstNameVeryLongNameFirstNameVeryLongNameFirstNameVeryLongNameFirstNameVeryLongNameFirstNameVeryLongName\" : \"FN\",\n  \"lastName\" : \"LN\",\n  \"_links\" : {\n    \"self\" : {\n      \"href\" : \"http://localhost:8080/customers/1\"\n    },\n    \"customer\" : {\n      \"href\" : \"http://localhost:8080/customers/1\"\n    }\n  }\n}",
                "requestType": "application/json",
                "requestBody": JSON.stringify(deepNestedJson),
                "responseBodyChecks": {
                    "failedPaths": [],
                    "passedPaths": []
                }
            }],
            "steps": [{
                "elapsedTime": 300,
                "message": [{
                    "type": "action",
                    "value": "executed HTTP POST"
                }, {
                    "type": "url",
                    "value": "http://localhost:8080/customers"
                }],
                "children": [{
                    "elapsedTime": 50,
                    "message": [{
                        "type": "id",
                        "value": "header.statusCode"
                    }, {
                        "type": "matcher",
                        "value": "equals 201\nmatches:\n\nheader.statusCode:   actual: 201 <java.lang.Integer>\n                   expected: 201 <java.lang.Integer>"
                    }]
                }]
            }]
        },
        {
            "id": "another.groovy-2",
            "scenario": "customer read",
            "status": "Passed",
            "fileName": "rest\\springboot\\anotherTest.groovy",
            "className": "com.example.tests.rest.AnotherIT",
            "startTime": 1534456916484,
            "elapsedTime": 22,
            "httpCalls": [{
                "method": "GET",
                "url": "http://localhost:8080/customers/3",
                "startTime": 1534456916484,
                "elapsedTime": 22,
                "errorMessage": null,
                "mismatches": [],
                "responseType": "application/json;charset=UTF-8",
                "responseStatusCode": 200,
                "responseBody": "{\n  \"id\" : 1,\n  \"firstName\" : \"FN\",\n  \"lastName\" : \"LN\",\n  \"_links\" : {\n    \"self\" : {\n      \"href\" : \"http://localhost:8080/customers/1\"\n    },\n    \"customer\" : {\n      \"href\" : \"http://localhost:8080/customers/1\"\n    }\n  }\n}",
                "responseBodyChecks": {
                    "failedPaths": [],
                    "passedPaths": ["root.firstName", "root.lastName"]
                }
            }],
            "steps": [{
                "elapsedTime": 350,
                "message": [{
                    "type": "action",
                    "value": "executed HTTP GET"
                }, {
                    "type": "url",
                    "value": "http://localhost:8080/customers/1"
                }],
                "children": [{
                    "elapsedTime": 50,
                    "message": [{
                        "type": "id",
                        "value": "body"
                    }, {
                        "type": "matcher",
                        "value": "equals {firstName=FN, lastName=LN}\nmatches:\n\nbody.firstName:   actual: \"FN\" <java.lang.String>\n                expected: \"FN\" <java.lang.String>\nbody.lastName:   actual: \"LN\" <java.lang.String>\n               expected: \"LN\" <java.lang.String>"
                    }]
                }, {
                    "elapsedTime": 50,
                    "message": [{
                        "type": "id",
                        "value": "header.statusCode"
                    }, {
                        "type": "matcher",
                        "value": "equals 200\nmatches:\n\nheader.statusCode:   actual: 200 <java.lang.Integer>\n                   expected: 200 <java.lang.Integer>"
                    }]
                }]
            }]
        },
        {
            "id": "customerCrudSeparated.groovy-3",
            "className": "com.example.tests.rest.CustomerCrudSeparatedIT",
            "scenario": "customer update",
            "status": "Passed",
            "startTime": 1534456916384,
            "elapsedTime": 32,
            "fileName": "rest/springboot/customerCrudSeparated.groovy",
            "httpCalls": [{
                "method": "PUT",
                "url": "http://localhost:8080/customers/1",
                "startTime": 1534456927154,
                "elapsedTime": 29,
                "errorMessage": null,
                "mismatches": [],
                "responseType": "application/json;charset=UTF-8",
                "responseStatusCode": 200,
                "responseBody": "{\n  \"id\" : 1,\n  \"firstName\" : \"FN\",\n  \"lastName\" : \"NLN\",\n  \"_links\" : {\n    \"self\" : {\n      \"href\" : \"http://localhost:8080/customers/1\"\n    },\n    \"customer\" : {\n      \"href\" : \"http://localhost:8080/customers/1\"\n    }\n  }\n}",
                "requestType": "application/json",
                "requestBody": "{\"firstName\":\"FN\",\"lastName\":\"NLN\"}",
                "responseBodyChecks": {
                    "failedPaths": [],
                    "passedPaths": ["root.lastName"]
                }
            }, {
                "method": "GET",
                "url": "http://localhost:8080/customers/1",
                "startTime": 1534456916394,
                "elapsedTime": 6,
                "errorMessage": null,
                "mismatches": [],
                "responseType": "application/json;charset=UTF-8",
                "responseStatusCode": 200,
                "responseBody": "{\n  \"id\" : 1,\n  \"firstName\" : \"FN\",\n  \"lastName\" : \"NLN\",\n  \"_links\" : {\n    \"self\" : {\n      \"href\" : \"http://localhost:8080/customers/1\"\n    },\n    \"customer\" : {\n      \"href\" : \"http://localhost:8080/customers/1\"\n    }\n  }\n}",
                "responseBodyChecks": {
                    "failedPaths": [],
                    "passedPaths": ["root.lastName"]
                }
            }],
            "steps": [{
                "elapsedTime": 450,
                "message": [{
                    "type": "action",
                    "value": "executed HTTP PUT"
                }, {
                    "type": "url",
                    "value": "http://localhost:8080/customers/1"
                }],
                "children": [{
                    "elapsedTime": 50,
                    "message": [{
                        "type": "id",
                        "value": "body.lastName"
                    }, {
                        "type": "matcher",
                        "value": "equals \"NLN\"\nmatches:\n\nbody.lastName:   actual: \"NLN\" <java.lang.String>\n               expected: \"NLN\" <java.lang.String>"
                    }]
                }, {
                    "elapsedTime": 50,
                    "message": [{
                        "type": "id",
                        "value": "header.statusCode"
                    }, {
                        "type": "matcher",
                        "value": "equals 200\nmatches:\n\nheader.statusCode:   actual: 200 <java.lang.Integer>\n                   expected: 200 <java.lang.Integer>"
                    }]
                }]
            }, {
                "elapsedTime": 150,
                "message": [{
                    "type": "action",
                    "value": "executed HTTP GET"
                }, {
                    "type": "url",
                    "value": "http://localhost:8080/customers/1"
                }],
                "children": [{
                    "elapsedTime": 50,
                    "message": [{
                        "type": "id",
                        "value": "body.lastName"
                    }, {
                        "type": "matcher",
                        "value": "equals \"NLN\"\nmatches:\n\nbody.lastName:   actual: \"NLN\" <java.lang.String>\n               expected: \"NLN\" <java.lang.String>"
                    }]
                }, {
                    "elapsedTime": 50,
                    "message": [{
                        "type": "id",
                        "value": "header.statusCode"
                    }, {
                        "type": "matcher",
                        "value": "equals 200\nmatches:\n\nheader.statusCode:   actual: 200 <java.lang.Integer>\n                   expected: 200 <java.lang.Integer>"
                    }]
                }]
            }]
        },
        {
            "id": "customerCrudSeparated.groovy-4",
            "className": "com.example.tests.rest.CustomerCrudSeparatedIT",
            "scenario": "customer delete",
            "status": "Failed",
            "fileName": "rest/springboot/customerCrudSeparated.groovy",
            "startTime": 1534456916784,
            "elapsedTime": 32,
            "httpCalls": [{
                "method": "DELETE",
                "url": "http://localhost:8080/customers/1",
                "startTime": 1534456916784,
                "elapsedTime": 12,
                "errorMessage": null,
                "mismatches": [],
                "responseType": "",
                "responseStatusCode": 204,
                "responseBody": "",
                "responseBodyChecks": {
                    "failedPaths": [],
                    "passedPaths": []
                }
            }, {
                "method": "GET",
                "url": "http://localhost:8080/customers/1",
                "startTime": 1534456916684,
                "elapsedTime": 9,
                "errorMessage": null,
                "mismatches": [],
                "responseType": "",
                "responseStatusCode": 404,
                "responseBody": "",
                "responseBodyChecks": {
                    "failedPaths": [],
                    "passedPaths": []
                }
            }],
            "steps": [{
                "elapsedTime": 200,
                "message": [{
                    "type": "action",
                    "value": "executed HTTP DELETE"
                }, {
                    "type": "url",
                    "value": "http://localhost:8080/customers/1"
                }],
                "children": [{
                    "elapsedTime": 50,
                    "message": [{
                        "type": "id",
                        "value": "header.statusCode"
                    }, {
                        "type": "matcher",
                        "value": "equals 204\nmatches:\n\nheader.statusCode:   actual: 204 <java.lang.Integer>\n                   expected: 204 <java.lang.Integer>"
                    }]
                }]
            }, {
                "elapsedTime": 150,
                "message": [{
                    "type": "action",
                    "value": "executed HTTP GET"
                }, {
                    "type": "url",
                    "value": "http://localhost:8080/customers/1"
                }],
                "children": [{
                    "elapsedTime": 50,
                    "message": [{
                        "type": "id",
                        "value": "header.statusCode"
                    }, {
                        "type": "matcher",
                        "value": "equals 404\nmatches:\n\nheader.statusCode:   actual: 404 <java.lang.Integer>\n                   expected: 404 <java.lang.Integer>"
                    }]
                }]
            }]
        }],
    "openApiSkippedOperations": [],
    "openApiCoveredOperations": [{
        "method": "POST",
        "url": "/customers/"
    }, {
        "method": "DELETE",
        "url": "/customers/{customerId}"
    }, {
        "method": "GET",
        "url": "/customers/{customerId}"
    }, {
        "method": "PUT",
        "url": "/customers/{customerId}"
    }]
}
