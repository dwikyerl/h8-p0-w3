/**
Buatlah sebuah algoritma/pseudocode untuk kasus berikut:

Seorang anak akan dibelikan mainan jika nilai sekolahnya bagus. List mainan yang
akan dibelikan oleh orang tuanya tergantung dengan nilai-nya.

* Range Nilai 90 - 100 akan mendapatkan hadiah `RASTAR-MOTORCYCLE BMW RED`
* Range Nilai 70 - 89 akan mendapatkan hadiah `HALO ROBOTICS-SPHERO STAR WARS`
* Range Nilai 50 - 69 akan mendapatkan hadiah `Die Cast`
* Range 50 ke bawah tidak akan mendapatkan apapun

NOTE:
Range nilai hanya dari 0 - 100, jika nilai kurang dari itu atau lebih maka tampilkan 'Invalid Score'

*/

READ "nilai"

IF "nilai" >= 90 && <= 100:
  DISPLAY "RASTAR_MOTORCYCLE BMW RED"
ELSE IF "nilai" >= 70 && <= 89:
  DISPLAY "HALO ROBOTICS-SPHERO STAR WARS"
ELSE IF "nilai" >= 50 && <= 69:
  DISPLAY "Die Cast"
ELSE IF "nilai" >= 0 && "nilai" < 50:
  DISPLAY "Tidak mendapatkan apapun"
ELSE:
  DISPLAY "Invalid Score"
ENDIF