/* Write your T-SQL query statement below */

SELECT s.user_id, 
ROUND(1.00 * SUM(CASE WHEN c.action = 'confirmed' THEN 1 ELSE 0 END) / COUNT(*), 2) AS confirmation_rate
FROM Signups s
LEFT JOIN Confirmations c ON s.user_id = c.user_id
GROUP BY s.user_id
