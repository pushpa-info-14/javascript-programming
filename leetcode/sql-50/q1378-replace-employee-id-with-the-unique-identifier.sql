/* Write your T-SQL query statement below */

SELECT unique_id, [name] FROM Employees AS e
LEFT JOIN EmployeeUNI AS eu ON e.Id = eu.id