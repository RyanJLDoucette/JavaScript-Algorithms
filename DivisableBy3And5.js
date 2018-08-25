/*
Print All numbers divisable by 3 and 5
*/

for(var i = 5; i < 51; i +=5) {
    if(i%3==0 && i%5==0) {
        console.log(i);
    }
}