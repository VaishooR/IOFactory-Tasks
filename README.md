

Frontend Skill Test:
--------------------

1. Section-2 : https://frontend-section-2.netlify.app/
2. Section-4 : https://frontend-section-4.netlify.app/
3. Section-3 : https://frontend-section-3.netlify.app/
4. Section-1 : https://frontend-section-1.netlify.app/




Max Profit Problem:
-------------------

i) 'T'     --> establishment build time = 5 hours
           --> earning/hr = Rs 1500

ii) 'P'    --> establishment build time = 4 hours
           --> earning/hr = Rs 1000

iii) 'C'   --> establishment build time = 10 hours
           --> earning/hr = Rs 3000




Formula:
----------------------------------------------------------------


givenTime = establishment build time + building operational time

---> building operational time = givenTime - establishment build time

---> actual earning = building operational time * earning/hr

---> no of buildings built within givenTime = (givenTime) / (establishment build time)





TEST CASE 1:      (givenTime: 7 hours and givenEarning: Rs 3000)
----------------------------------------------------------------

i) THEATRE:
-----------
   givenTime > establishment build time
   no of theatres built within givenTime = 7 / 5 = 1
   building operational time = 7 - 5 = 2
   actual earning = 2 * 1500 = 3000
        ---> Here actual earning === givenEarning
        ---> { T:1, P:0, C:0}   


ii) PUB:
--------
   givenTime > establishment build time
   no of pubs built within givenTime = 7 / 4 = 1
   building operational time = 7 - 4 = 3
   actual earning = 3 * 1000 = 3000
        ---> Here actual earning === givenEarning
        ---> { T:0, P:1, C:0}   


iii) COMMERCIAL PARK:
---------------------
   givenTime < establishment build time








TEST CASE 2:      (givenTime: 8 hours and givenEarning: Rs 4500)
----------------------------------------------------------------

i) THEATRE:
-----------   
   givenTime > establishment build time
   no of theatres built within givenTime = 8 / 5 = 1
   building operational time = 8 - 5 = 3
   actual earning = 3 * 1500 = 4500
        ---> Here actual earning === givenEarning
        ---> { T:1, P:0, C:0}   


ii) PUB:
--------   
   givenTime > establishment build time
   no of pubs built within givenTime = 8 / 4 = 2
   building operational time = 8 - 4 = 4
   actual earning = 4 * 1000 = 4000
        ---> Here actual earning != givenEarning  


iii) COMMERCIAL PARK:
---------------------
   givenTime < establishment build time





   TEST CASE 3:      (givenTime: 13 hours and givenEarning: Rs 16500)
----------------------------------------------------------------

i) THEATRE:
-----------   
   givenTime > establishment build time
   no of theatres built within givenTime = 13 / 5 = 2
   building operational time = 13 - 5 = 8
                             = 8  - 5 = 3
   total operational time = 8 + 3 = 11                            
   actual earning = 11 * 1500 = 165000
        ---> Here actual earning === givenEarning
        ---> { T:2, P:0, C:0}   


ii) PUB:
--------   
   givenTime > establishment build time
   no of pubs built within givenTime = 13 / 4 = 3
   building operational time = 13 - 4 = 9
                             = 9  - 4 = 5
                             = 5  - 4 = 1
    total operational time = 9 + 5 + 1 = 15                         
   actual earning = 15 * 1000 = 15000
        ---> Here actual earning != givenEarning 


iii) COMMERCIAL PARK:
---------------------
   givenTime > establishment build time
   no of pubs built within givenTime = 13 / 10 = 1
   building operational time = 13 - 10 = 3
                                                      
   actual earning = 3 * 3000 = 9000
        ---> Here actual earning != givenEarning






