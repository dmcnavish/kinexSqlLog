# kinexSqlLog
Turns unreadable log statements into a thing of beauty


## Overview
This script is used to make it easier to read a log statement outputted by knex.js. It also inserts the parameters into the query so it can easily be executed in your favorite sql tool of choice. 

Still a work in progress

### Example
Input:
```
node format.js '{"time":"2018-08-23T14:34:21.942Z","hostname":"Daves-MacBook-Pro.local","pid":86503,"level":"debug","name":"sql","__knexUid":"__knexUid11","__knexTxId":undefined,"method":"select","options":{},"timeout":false,"cancelOnTimeout":false,"bindings":["dave",false],"__knexQueryUid":"6646d049-f3c7-4b11-9bed-cc94bb67b187","sql":"select count(*) as \"count\" from (select \"comp_plan\".* from \"users\" where \"name\" = ? and \"deleted\" = ?) as \"temp\""}'
```

Output:
```
bindings:  [ 'dave', false ]
select
  count(*) as count
from
  (
    select
      comp_plan.*
    from
      users
    where
      name = 'dave'
      and deleted = false
  ) as temp
  ```
