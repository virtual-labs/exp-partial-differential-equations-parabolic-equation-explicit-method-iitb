function activity2() {
    let btn = (document.getElementById('act1-btn1'));
    btn && btn.remove();
    internal_calculation2();
    let btn_text = get_collapse_btn_text('Activity 2', 'act2-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='act2-div'>
      <p class="18px fb-500" style='text-align:left;'>
         Find the square of parabolic equation by explicit method.
      </p>

      <div>
         $$
            \\frac{\\partial^2u}{\∂ x^2} = a\\frac{\∂ u}{\∂ t}
         $$
         $$
            \\frac{\\partial^2u}{\∂ x^2} = ${a}\\frac{\∂ u}{\∂ t}
         $$
         $$ when, u(0,t) = 0, u(4,t) = 0, u(x,0) = x(4-x) $$
         $$ h = 1 $$
         $$ \\lambda = ${lambda2} $$
      </div>
      <p class="18px fb-500" style='text-align:left;'>
         Find, distribution of u at t = ${dist_at2},
      </p>

      <div>
         $$
            \\frac{u_{i+1,j} - u_{ij}}{k} = \\frac{1}{a}\\left[\\frac{u_{i,j+1} - 2u_{ij} + u_{ij} - 1}{h^2}\\right]
         $$
         $$
            \λ = \\frac{k}{ah^2}
         $$
      </div>
      <div id="act2-k-div">
         <br>
         k = <span style="display:inline-block;"> <input type='number' id='act2-k-inp' class='form-control fs-16px' /> </span>
         <br>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_k();' id='act2-vf-btn1'>Verify</button>
      </div>
         
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
}
function a2_verify_k() {
    let k_inp = (document.getElementById('act2-k-inp'));
    console.log(k2);
    if (!verify_values(parseFloat(k_inp.value), k2)) {
        k_inp.style.border = '1px solid red';
        alert('Incorrect k value');
        return;
    }
    else {
        k_inp.style.border = '1px solid #ced4da';
        k_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-k-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <div class="fs-18px fb-500">
      $$ k = ${k2} $$
      $$ u_{i+1,j} = \\lambda(u_{i,j+1} - 2u_{ij} + u_{i,j-1}) + u_{ij} $$
   </div>
   
   <br>
   <div>
      <svg viewBox="-300 0 1100 300">
         <!-- Circles -->
         <circle cx="50" cy="50" r="50" stroke="white" stroke-width="2" fill="black" />
         <circle cx="250" cy="50" r="50" stroke="white" stroke-width="2" fill="black" />
         <circle cx="450" cy="50" r="50" stroke="white" stroke-width="2" fill="black" />
         <circle cx="250" cy="200" r="50" stroke="white" stroke-width="2" fill="black" />

         <!-- Lines -->
         <line x1="75" y1="50" x2="225" y2="50" style="stroke:black;stroke-width:2" />
         <line x1="275" y1="50" x2="425" y2="50" style="stroke:black;stroke-width:2" />
         <line x1="250" y1="75" x2="250" y2="175" style="stroke:black;stroke-width:2" />

         <!-- Text -->
         <text x="50" y="50" fill="white" style="font-size:30px;" text-anchor="middle" dy=".3em">u<tspan
            baseline-shift="sub" style="font-size:20px;">i,j-1</tspan></text>
         
         <text x="250" y="50" fill="white" style="font-size:30px;" text-anchor="middle" dy=".3em">u<tspan
            baseline-shift="sub" style="font-size:20px;">i,j</tspan></text>
      
         <text x="450" y="50" fill="white" style="font-size:30px;" text-anchor="middle" dy=".3em">u<tspan
            baseline-shift="sub" style="font-size:20px;">i,j+1</tspan></text>
      
         <text x="250" y="200" fill="white" style="font-size:30px;" text-anchor="middle" dy=".3em">u<tspan
            baseline-shift="sub" style="font-size:20px">i+1,j</tspan></text>
      </svg>
   </div>
   <br>
   
   <div id="act2-tb-box">
   </div>
   `;
    let header = ['t&darr; \\ x&rarr;', '0', '1', '2', '3', '4'];
    let vf_rows = [];
    let vf_cols = [];
    let tb_box = (document.getElementById('act2-tb-box'));
    if (table_data2.length > 2) {
        vf_rows = [0, 1, 2];
        vf_cols = [
            [2, 3, 4],
            [2, 3, 4],
            [2, 3, 4],
        ];
    }
    else {
        vf_rows = [0, 1];
        vf_cols = [
            [2, 3, 4],
            [2, 3, 4],
        ];
    }
    let tab = new Verify_Rows_Cols_Custom_Fixed_Update1(header, table_data2, vf_rows, vf_cols, '', tb_box, true, true, act2_complete, 3);
    tab.load_table();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function internal_calculation2() {
    let n;
    let t = 0;
    k2 = 0;
    table_data2 = [];
    k2 = lambda2 * a * Math.pow(h, 2);
    console.log(a, k2);
    if (4 % k2 != 0) {
        let temp1 = 0;
        while (temp1 < 4) {
            temp1 += k2;
        }
        let temp2 = temp1 - k2;
        if (Math.abs(4 - temp2) <= Math.abs(4 - temp1)) {
            dist_at2 = temp2;
        }
        else {
            dist_at2 = temp1;
        }
        n = dist_at2 / k2 + 1;
        for (let i = 0; i < n; i++) {
            let arr = [];
            for (let j = 0; j <= 5; j++) {
                if (j == 0) {
                    arr.push(t);
                    t += k2;
                }
                else if (j == 1 || j == 5) {
                    arr.push(0);
                }
                else if (i == 0) {
                    arr.push((j - 1) * (4 - (j - 1)));
                }
                else {
                    arr.push(lambda2 *
                        (table_data2[i - 1][j - 1] -
                            2 * table_data2[i - 1][j] +
                            table_data2[i - 1][j + 1]) +
                        table_data2[i - 1][j]);
                }
            }
            table_data2.push(arr);
        }
    }
    else {
        n = dist_at2 / k2 + 1;
        for (let i = 0; i < n; i++) {
            let arr = [];
            for (let j = 0; j <= 5; j++) {
                if (j == 0) {
                    arr.push(t);
                    t += k2;
                }
                else if (j == 1 || j == 5) {
                    arr.push(0);
                }
                else if (i == 0) {
                    arr.push((j - 1) * (4 - (j - 1)));
                }
                else {
                    arr.push(lambda2 *
                        (table_data2[i - 1][j - 1] -
                            2 * table_data2[i - 1][j] +
                            table_data2[i - 1][j + 1]) +
                        table_data2[i - 1][j]);
                }
            }
            table_data2.push(arr);
        }
    }
}
function act2_complete() {
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='activity3();' id='act2-btn1'>Next</button>
   `;
}
// activity2();
//# sourceMappingURL=activity2.js.map