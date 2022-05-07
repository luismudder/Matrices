// Created by Luis Müdder | github.com/luismudder
module.exports={
	Create:(rows=undefined, cols=undefined)=>{
		if(rows==undefined||cols==undefined){
			return(-3);
		}else{return(new Matrices(rows,cols));};},
	Sum:(a=undefined, b=undefined)=>{
		if(a==undefined||b==undefined){
			return(-3);
		}else{return(Matrices.sum(a,b));};},
	Subtration:(a=undefined, b=undefined)=>{
		if(a==undefined||b==undefined){
			return(-3);
		}else{return(Matrices.subtration(a,b));};},
	Multiply:(a=undefined, b=undefined)=>{
		if(a==undefined||b==undefined){
			return(-3);
		}else{return(Matrices.multiply(a,b));};},
	Hadamard:(a=undefined, b=undefined)=>{
		if(a==undefined||b==undefined){
			return(-3);
		}else{return(Matrices.hadamard(a,b));};},
	Transpose:(a=undefined)=>{
		if(a==undefined){
			return(-3);
		}else{return(Matrices.transpose(a));};},
	Escalar:(a=undefined, b=undefined, type="multiply")=>{
		if(a==undefined||b==undefined||type==undefined){
			return(-3);
		}else{return(Matrices.escalar(a, b, type));};}};
class Matrices{
	constructor(rows,cols){
		this.Matrix=new Array();
		this.rows=parseInt(rows);this.cols=parseInt(cols);
		for(let row=0;row<rows;row++){
			this.Matrix.push(new Array());
			for(let col=0;col<cols;col++){
				this.Matrix[row].push(0);};};};
	static sum(a,b){
		if(a.rows===b.rows&a.cols===b.cols){
			try{const response=new Matrices(a.rows,a.cols);
				for(let row=0;row<response.rows;row++){
					for(let col=0;col<response.cols;col++){
						response.Matrix[row][col]=
							a.Matrix[row][col]+b.Matrix[row][col];};};
				return(response);
			}catch(err){return({err:-2,log:err});};
		}else{return({err:-1});};};
	static multiply(a,b){
		if(a.cols===b.rows){
			try{const response=new Matrices(a.rows,b.cols);
				for(let row=0;row<response.rows;row++){
					for(let col=0;col<response.cols;col++){
						response.Matrix[row][col]=0;
						for(let acol=0;acol<a.cols;acol++){
							response.Matrix[row][col]+=a.Matrix[row][acol]*b.Matrix[acol][col];};};};
				return(response);
			}catch(err){return({err:-2,log:err});};
		}else{return({err:-1});};};
	static hadamard(a,b){
		if(a.rows===b.rows&a.cols===b.cols){
			try{const response=new Matrices(a.rows,a.cols);
				for(let row=0;row<response.rows;row++){
					for(let col=0;col<response.cols;col++){
						response.Matrix[row][col]=
							a.Matrix[row][col]*b.Matrix[row][col];};};
				return(response);
			}catch(err){return({err:-2,log:err});};
		}else{return({err:-1});};};
	static transpose(a){
		try{const response=new Matrices(a.cols,a.rows);
			for(let col=0;col<response.cols;col++){
				for(let row=0;row<response.rows;row++){
					response.Matrix[col][row]=a.Matrix[row][col]};};
			return(response);
		}catch(err){return({err:-2,log:err})};};
	static subtration(a,b){
		if(a.rows===b.rows&a.cols===b.cols){
			try{const response=new Matrices(a.rows,a.cols);
				for(let row=0;row<response.rows;row++){
					for(let col=0;col<response.cols;col++){
						response.Matrix[row][col]=
							a.Matrix[row][col]-b.Matrix[row][col];};};
				return(response);
			}catch(err){return({err:-2,log:err});};
		}else{return({err:-1});};};
	static escalar(a, b, type="multiply"){
		try{const response = new Matrices(a.rows, a.cols);
			switch(type){
				case"multiply":
					for(let row=0;row<a.rows;row++){
						for(let col=0;col<a.cols;col++){
							response.setValue(row, col, a.getValue(row, col)*b);};};break;
				case"sum":for(let row=0;row<a.rows;row++){
						for(let col=0;col<a.cols;col++){
							response.setValue(row, col, a.getValue(row, col)+b);};};break;
				case"subtration":for(let row=0;row<a.rows;row++){
						for(let col=0;col<a.cols;col++){
							response.setValue(row, col, a.getValue(row, col)-b);};};break;};
			return(response);
		}catch(err){return({err:-2,log:err})};};
	setValue(row,col,value){
		if(typeof(value)===`number`){
			try{if(col==="all"&&row!=="all"){
					for(let cols=0; cols<this.cols; cols++){
						this.Matrix[row][cols]=value;};
				}else{if(col==="all"&&row==="all"){
					for(let rows=0;rows<this.rows;rows++){
						for(let cols=0;cols<this.cols;cols++){
							this.Matrix[rows][cols]=value;};};};};
				if(row==="all"&&col!=="all"){
					for(let rows=0;rows<this.rows;rows++){
						this.Matrix[rows][col]=value;};};
				if(row!=="all"&&col!=="all"){this.Matrix[row][col]=value;};
			}catch(err){return({err:-2,log:err})};
		}else{return({err:-1})};};
	getValue(row, col){
		try{return(this.Matrix[row][col]);}
		catch(err){return({err:-2,log:err})};};};
