const express = require('express');
const appConfig = require("./../../config/appConfig")
const userController = require("../controller/userController");
const meetingController = require("./../controller/meetingController")

const fs = require("fs")
const auth = require("../middlewares/auth");


module.exports.setRouter = (app) => {
  let baseUrl = `${appConfig.apiVersion}/meeting`;



  //get all user List
  app.get(`${baseUrl}/allUsers`, auth.isAuthorized, userController.getAllUsers);

  /**
	 * @api {get} /api/v1/meeting/allUsers Get all user as array
	 * @apiVersion 0.0.1
	 * @apiGroup Meeting
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  [{
        "_id": "5cbce6a09314223c381d789d",
        "__v": 0,
        "isAdmin": false,
        "createdOn": "2019-04-21T21:54:40.000Z",
        "mobileNumber": "(870)-46454834",
        "emailId": "adi.sharma@gmail.com",
        "userPassword": "$2a$10$X9XUS2U5AjKZiy7YwlbTXuHk2/wJ5eFL9oX7r6VwHSTi5X6tOFs2K",
        "lastName": "sharma",
        "firstName": "adi",
        "userId": "QUzVGFNrh"
      }]
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
    "error": true,
    "message": "Invalid Or Expired AuthorizationKey",
    "status": 404,
    "data": null
  } 
	 */


  //create event 
  app.post(`${baseUrl}/createEvent`, auth.isAuthorized, meetingController.createEvent)

  /**
 * @api {post} /api/v1/meeting/createEvent Create meeting
 * @apiVersion 0.0.1
 * @apiGroup Meeting
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
 * @apiParam {String} title title of the event passed as the body parameter
 * @apiParam {String} startDate startDate of the event passed as the body parameter
 * @apiParam {String} endDate endDate of the event passed as the body parameter
 * @apiParam {String} location location of the event passed as the body parameter
 * @apiParam {String} userId userId of the event passed as the body parameter
 * @apiParam {String} creatorId creatorId of the event passed as the body parameter
 * @apiParam {String} creatorName creatorName of the event passed as the body parameter
 * 
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "message": "User created",
    "status": 200,
    "data": {
        "__v": 0,
        "_id": "5cbf8c698487a62dbca6c2e4",
        "creatorName": "Santanu",
        "creatorId": "12sdadfa1",
        "userId": "QUzVGFNrh",
        "location": "Some location",
        "end": "2019:05:04T12:00:00",
        "start": "2019:04:04T12:00:00",
        "title": "Some Title",
        "id": "N09iK2jHU"
    }
    }   
	}
}
	@apiErrorExample {json} Error-Response:
 *
 * {
		"error": true,
		"message": "Error Occured.,
		"status": 500,
		"data": null
	 }
 */

  //get event 
  app.post(`${baseUrl}/getEvent`, auth.isAuthorized, meetingController.getEvents)

  /**
 * @api {post} /api/v1/meeting/createEvent get all meeting of a user
 * @apiVersion 0.0.1
 * @apiGroup Meeting
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
 * @apiParam {String} userId userId of the event passed as the body parameter
 * 
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "message": "All Events Listed",
    "status": 200,
    "data": []
    }  
	}
}
	@apiErrorExample {json} Error-Response:
 *
 * {
		"error": true,
		"message": "Error Occured.,
		"status": 500,
		"data": null
	 }
 */

  // Edit Event
  app.post(`${baseUrl}/:id/editEvent`, auth.isAuthorized, meetingController.editEvent)

  /**
 * @api {post} /api/v1/meeting/:id/editEvent edit meeting
 * @apiVersion 0.0.1
 * @apiGroup Meeting
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
 * @apiParam {String} userId userId of the event passed as the path parameter
 * @apiParam {String} title title of the event passed as the body parameter
 * @apiParam {String} start startDate of the event passed as the body parameter
 * @apiParam {String} end endDate of the event passed as the body parameter
 * @apiParam {String} location location of the event passed as the body parameter
 * 
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "message": "User details edited",
    "status": 200,
    "data": {
        "n": 1,
        "nModified": 1,
        "ok": 1
    }
} 
	}
}
	@apiErrorExample {json} Error-Response:
 *
 * {
		"error": true,
		"message": "Error Occured.,
		"status": 500,
		"data": null
	 }
 */

  //Delete Event
  app.get(`${baseUrl}/:id/deleteEvent`, auth.isAuthorized, meetingController.deleteEvent)

  /**
	 * @api {get} /api/v1/meeting/:id/deleteEvent delete event by id
	 * @apiVersion 0.0.1
	 * @apiGroup Meeting
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
   *  @apiParam {String} id id of event to be passed in body parameter.
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
    "error": false,
    "message": "Deleted the event successfully",
    "status": 200,
    "data": {
        "_id": "5cbf54c9ffc7b81e4ce66370",
        "__v": 0,
        "creatorName": "vivek mishra",
        "creatorId": "vMRFJ7kBU",
        "userId": "QUzVGFNrh",
        "location": "Some location",
        "end": "2019:05:04T12:00:00",
        "start": "2019:05:03T12:00:00",
        "title": "some title",
        "id": "eBUwJvXcC"
    }
}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
    "error": true,
    "message": "event not found",
    "status": 500,
    "data": null
  } 
	 */



}