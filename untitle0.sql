ALTER TABLE "TELLMEDEV"."USERS" ALTER ("phone" varchar(20));

UPDATE "TELLMEDEV"."USERS" SET "phone" =  '9762140609' WHERE "id" = 1;

SELECT * FROM "TELLMEDEV"."USERS" user, "TELLMEDEV"."ADDRESS" address 
WHERE user."workplace_address_id" = address."id" AND user."id"= 1;  

UPDATE "TELLMEDEV"."USERS" SET
        "firstname" = 'Aniket'/*firstname <NVARCHAR(50)>*/,
	    "lastname" = 'Kamthe'/*lastname <NVARCHAR(50)>*/,
	    "email" = 'aniket.kamthe@extentia.com'/*email <NVARCHAR(120)>*/,
	    "phone" = '9762140609'/*phone <VARCHAR(20)>*/,
	    "password" = 'admin@123'/*password <NVARCHAR(200)>*/,
	    "workplace_address_id" = 1/*workplace_address_id <INTEGER>*/,
	    "status" = 1,
	    "user_type" = 0/*user_type <TINYINT>*/ WHERE "id" = 1;
	    
DELETE FROM	 "TELLMEDEV"."USERS" WHERE "id" IN(7);   

TRUNCATE TABLE "TELLMEDEV"."USER_DEVICE_DETAILS";

SELECT * FROM "TELLMEDEV"."USERS" user WHERE user."phone" = '9762140609' OR user."email" = 'onkar.veer@extentia.com';

INSERT INTO "TELLMEDEV"."EXPERT_TYPE" ("type") VALUES('Electric');
INSERT INTO "TELLMEDEV"."EXPERT_TYPE" ("type") VALUES('Plumbing');
INSERT INTO "TELLMEDEV"."EXPERT_TYPE" ("type") VALUES('Cleaning');