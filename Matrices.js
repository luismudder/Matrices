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
		}else{return(Matrices.transpose(a));};}
};
class Matrices{
	constructor(rows,cols){
		this.Matrix=new Array();
		this.rows=parseInt(rows);this.cols=parseInt(cols);
		for(let row=0;row<rows;row++){
			this.Matrix.push(new Array());
			for(let col=0;col<cols;col++){
				this.Matrix[row].push(new Array());};};};
	static sum(a,b){
		if(a.rows===b.rows&a.cols===b.cols){
			try{const response=new Matrices(a.rows,a.cols);
				for(let row=0;row<response.rows;row++){
					for(let col=0;col<response.cols;col++){
						response.Matrix[row][col]=
							parseInt(a.Matrix[row][col])+parseInt(b.Matrix[row][col]);};};
				return(response);
			}catch(err){return(-2);};
		}else{return(-1);};};
	static multiply(a,b){
		if(a.cols===b.rows){
			try{const response=new Matrices(a.rows,b.cols);
				for(let row=0;row<response.rows;row++){
					for(let col=0;col<response.cols;col++){
						response.Matrix[row][col]=0;
						for(let acol=0;acol<a.cols;acol++){
							response.Matrix[row][col]+=a.Matrix[row][acol]*b.Matrix[acol][col];};};};
				return(response);
			}catch(err){return(-2);};
		}else{return(-1);};};
	static hadamard(a,b){
		if(a.rows===b.rows&a.cols===b.cols){
			try{const response=new Matrices(a.rows,a.cols);
				for(let row=0;row<response.rows;row++){
					for(let col=0;col<response.cols;col++){
						response.Matrix[row][col]=
							parseInt(a.Matrix[row][col])*parseInt(b.Matrix[row][col]);};};
				return(response);
			}catch(err){return(-2);};
		}else{return(-1);};};
	static transpose(a){
		try{const response=new Matrices(a.cols,a.rows);
			for(let col=0;col<response.cols;col++){
				for(let row=0;row<response.rows;row++){
					response.Matrix[col][row]=parseInt(a.Matrix[row][col])};};
			return(response);
		}catch(err){return(-2)};};
	static subtration(a,b){
		if(a.rows===b.rows&a.cols===b.cols){
			try{const response=new Matrices(a.rows,a.cols);
				for(let row=0;row<response.rows;row++){
					for(let col=0;col<response.cols;col++){
						response.Matrix[row][col]=
							parseInt(a.Matrix[row][col])-parseInt(b.Matrix[row][col]);};};
				return(response);
			}catch(err){return(-2);};
		}else{return(-1);};
	};
	Value(rows,cols,value){
		if(typeof(value)===`number`){
			try{this.Matrix[rows][cols]=value;
			}catch(err){return(-2)};
		}else{return(-1)};};};
