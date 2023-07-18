class Account {

    constructor(bank,id,name,balance){
        this.bank =bank;
        this.id= id;
        this.name=name;
        this.balance=balance;
    }

    deposit(money) {
        this.balance+=money;
    }//함수 와 매서드 차이점 : 매서드는 클래스의 멤버함수 클래스안에서 선언할때는 function제거

    widthraw(money){
        this.balance-=money;
    }

    show(){
        document.write('<p>');
        document.write('은행명 : '+this.bank+'<br>');
        document.write('계좌번호 : '+this.id+'<br>');
        document.write('입금주 : '+this.name+'<br>');
        document.write('현재잔액 : '+this.balance+'<br>');
        document.write('<p>');
    }




}