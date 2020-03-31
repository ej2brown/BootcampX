/*We need to be able to see the current average time it takes to complete an assistance request.

Get the average time of an assistance request.

Expected Result:

 average_assistance_request_duration 
-------------------------------------
 00:14:21.556903
*/
SELECT AVG(completed_at - started_at) as average_assistance_request_duration
FROM assistance_requests;
