Backend API - Task 1: API Creation & Documentation
Overview
This project involves creating a set of APIs to handle events and nudges, using Node.js and MongoDB. The task is to implement the necessary backend functionality for CRUD operations on event data and create an API for a "nudge creation" page.

Features
Event Management API: Create, update, retrieve, and delete events.
Nudge Creation API: Allows users to create a nudge for an event, including uploading an image, setting a scheduled time, and providing a title and description.
Table of Contents
Tech Stack
API Endpoints
Setup Instructions
Usage
API Documentation
Contributing
License
Tech Stack
Node.js - JavaScript runtime for building server-side applications.
MongoDB - NoSQL database for storing event and nudge data.
Express.js - Web framework for Node.js for building the API.
Postman - Tool for testing API requests.
API Endpoints
Event Endpoints
GET /events?id=

Description: Retrieves an event by its unique ID.
Query Params: event_id
Response: Event data as JSON.
GET /events?type=latest&limit=5&page=1

Description: Fetches the latest events with pagination support.
Query Params: type, limit, page
Response: List of events based on recency and pagination.
POST /events

Description: Creates a new event.
Payload:
json
Copy code
{
  "name": "string",
  "tagline": "string",
  "schedule": "timestamp",
  "description": "string",
  "moderator": "user_id",
  "category": "string",
  "sub_category": "string",
  "rigor_rank": "integer"
}
Response: Returns created event ID.
PUT /events/

Description: Updates an event based on its unique ID.
Payload: Same as POST payload.
Response: Updated event data.
DELETE /events/

Description: Deletes an event based on its unique ID.
Response: Success or failure message.
Nudge Endpoints
POST /nudges
Description: Creates a new nudge for an event.
Payload:
json
Copy code
{
  "event_id": "string",
  "title": "string",
  "cover_image": "file",
  "scheduled_time": "timestamp",
  "description": "string",
  "icon": "file",
  "invitation": "string"
}
Response: Returns the created nudge ID.
Setup Instructions
Clone this repository:

bash
Copy code
git clone https://github.com/yourusername/backend-api-task1.git
cd backend-api-task1
Install dependencies:

bash
Copy code
npm install
Set up MongoDB connection:

Ensure you have MongoDB running locally or use a cloud MongoDB instance (e.g., MongoDB Atlas).
Update the database connection URL in config/db.js with your MongoDB URI.
Start the server:

bash
Copy code
npm start
The server will run on http://localhost:3000.

Usage
Testing the API
You can test the API using Postman or cURL.

Create Event:

Endpoint: POST /events
Body:
json
Copy code
{
  "name": "Sample Event",
  "tagline": "Exciting Event",
  "schedule": "2024-11-25T10:00:00Z",
  "description": "This is a sample event.",
  "moderator": "user123",
  "category": "Education",
  "sub_category": "Workshop",
  "rigor_rank": 3
}
Create Nudge:

Endpoint: POST /nudges
Body:
json
Copy code
{
  "event_id": "sample_event_id",
  "title": "Reminder: Event Starting Soon!",
  "cover_image": "<image file>",
  "scheduled_time": "2024-11-25T09:00:00Z",
  "description": "Don't miss out on the exciting event happening soon!",
  "icon": "<icon file>",
  "invitation": "Join us now for the workshop!"
}
API Documentation
Event Model:
json
Copy code
{
  "type": "event",
  "uid": "18", 
  "name": "Event Name",
  "tagline": "Event Tagline",
  "schedule": "Timestamp",
  "description": "Event Description",
  "files[image]": "Image File",
  "moderator": "user_id",
  "category": "Category Name",
  "sub_category": "Sub-Category Name",
  "rigor_rank": 1,
  "attendees": ["user1", "user2"]
}
Nudge Model:
json
Copy code
{
  "event_id": "string",
  "title": "string",
  "cover_image": "file",
  "scheduled_time": "timestamp",
  "description": "string",
  "icon": "file",
  "invitation": "string"
}
Contributing
Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-name).
Create a new Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.
