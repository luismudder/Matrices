// Created by Luis Müdder | github.com/luismudder
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
		}else{return(-1);};};};