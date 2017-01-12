/*Get User Details*/
/*Super Admin*/
SELECT * FROM "TELLME_DEV"."USERS" user, "TELLME_DEV"."ADDRESS" address 
WHERE user."workplace_address_id" = address."id" AND user."id"= 1;  