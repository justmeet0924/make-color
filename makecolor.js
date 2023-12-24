function make_color(){
  
  base_color = [200, 200, 0];
  randomness = [50 * random(), 50 * random(), 0];

  col = [];

  for (let i = 0; i < 3; i++) {
    col[i] = [base_color[i] + randomness[i]];
  }
  
  return col;
  
}
