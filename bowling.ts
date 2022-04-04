/*La parte comentada funciona hsat los 5 ultioms tests, he cambiado la forma de hacer el problema, pero voy a empezar con lo de VUE*/
export class Bowling {
  totalScore: number = 0;
  jugadas: number[] = [];
  frames: number[][] = [];
  /*frames: number= 0;*/
  bonus:boolean=false;
  public roll(pins: number): void {
    if(this.frames.length===0){
      let jugada :number[]= [];
      jugada.push(pins)
      this.frames.push(jugada);
    }else if(this.frames[this.frames.length-1].length<2){
      this.frames[this.frames.length-1].push(pins);
    }else{
      let jugada :number[]=[];
      if(pins==10){
        jugada=[10,0]
      }else{
        
        jugada.push(pins)
      }
      
      this.frames.push(jugada);
    }
    


    /*if (pins > 10) {
      throw new Error("Pin count exceeds pins on the lane");
    } else if (pins < 0) {
      throw new Error("Negative roll is invalid");
    }
    this.frames=0;
    this.jugadas.push(pins);
    for (let i: number = 0; i < this.jugadas.length; i++) {
      if (this.jugadas[i] === 10) {
        if (this.frames===9) {
          this.bonus=true
        } else {
        }
        this.frames++;
      } else if (this.jugadas[i] + this.jugadas[i + 1] == 10) {
        if (this.frames==9) {
          this.bonus=true
        } else {
        }
        i++;
        this.frames++;
      } else {
        if (i >= this.jugadas.length - 1) {
          //this.totalScore+=this.jugadas[i];

        } else {
          if (this.jugadas[i] + this.jugadas[i + 1] > 10) {
            throw new Error('Pin count exceeds pins on the lane');
          }
        }
        i++;
        this.frames++; 
      }
    }
    if(this.frames>=10){
    }
   
    if(this.frames >10 && !this.bonus){
      throw new Error('Cannot roll after game is over');
    }*/
    

  }
  public score(): number {
    debugger
    let pleno:boolean=false;
    let semi:boolean=false;
    for(let frame:number=0; frame < 10;frame++){
      let sum:number=0;
      sum +=this.frames[frame][0];
      sum +=this.frames[frame][1];
      if(sum==10){
        if(this.frames[frame][0]==10){
          pleno=true;
        }else{
          semi=true;
        }
      }
      if(pleno){
        sum=0;
        frame++;
       
        this.totalScore +=this.frames[frame+1][0];
        this.totalScore +=this.frames[frame+1][1];
        this.totalScore+=10;
        if(this.frames[frame+1][0]!=10){
          pleno=false;
        }
      }else if(semi){
        sum=0;
        this.totalScore+=this.frames[frame+1][0]
        this.totalScore+=10;
        if(this.frames[frame+1][0]+this.frames[frame+1][1]!=10){
          semi=false;
        }
      }
      this.totalScore+=sum;
      
    }
    return this.totalScore;
    /*if(this.frames<10){
      throw new Error('Score cannot be taken until the end of the game');
    }
    for (let i: number = 0; i < this.jugadas.length; i++) {
      if (this.jugadas[i] === 10) {
        if (i >= this.jugadas.length - 3) {
          this.totalScore += this.jugadas[i];
        } else {
          this.totalScore += this.jugadas[i] + this.jugadas[i + 1] + this.jugadas[i + 2];
        }
      } else if (this.jugadas[i] + this.jugadas[i + 1] == 10) {
        if (i >= this.jugadas.length - 3) {
          this.totalScore += this.jugadas[i] + this.jugadas[i + 1];
        } else {
          this.totalScore += this.jugadas[i] + this.jugadas[i + 1] + this.jugadas[i + 2];
        }
        i++;
      } else {
        if (i >= this.jugadas.length - 1) {
          this.totalScore += this.jugadas[i];

        } else {
          this.totalScore += this.jugadas[i] + this.jugadas[i + 1];
        }
        i++;
      }
    }*/
    
  }
}
