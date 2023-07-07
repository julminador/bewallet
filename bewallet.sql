#Diary book
SELECT `date`,debit,c_debit,c_credit,credit
  FROM notes
  JOIN (
    SELECT account_id debit_id,account c_debit
      FROM accounts
  ) debit USING(debit_id)
  JOIN (
    SELECT account_id credit_id,account c_credit
      FROM accounts
  ) credit USING(credit_id)
  ORDER BY `date`;

#Balance
SELECT *,(IFNULL(credit,0)-IFNULL(debit,0))*IF(`asset`,1,-1) balance
FROM accounts LEFT JOIN (
	SELECT debit_id account_id,SUM(debit) debit
      FROM notes
      GROUP BY 1
) debit USING(account_id)
LEFT JOIN (
	SELECT credit_id account_id,SUM(credit) credit
      FROM notes
      GROUP BY 1
) credit USING(account_id);