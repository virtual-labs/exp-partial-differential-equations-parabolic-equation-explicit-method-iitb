function activity3() {
    let btn = (document.getElementById('act2-btn1'));
    btn && btn.remove();
    internal_calculation3();
    let btn_text = get_collapse_btn_text('Activity 3', 'act3-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='act3-div'>
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
         $$ \\lambda = ${lambda3} $$
      </div>
      <p class="18px fb-500" style='text-align:left;'>
         Find, distribution of u at t = ${dist_at3},
      </p>

      <div>
         $$
            \\frac{u_{i+1,j} - u_{ij}}{k} = \\frac{1}{a}\\left[\\frac{u_{i,j+1} - 2u_{ij} + u_{ij} - 1}{h^2}\\right]
         $$
         $$
            \λ = \\frac{k}{ah^2}
         $$
      </div>
      <div id="act3-k-div">
         <br>
         k = <span style="display:inline-block;"> <input type='number' id='act3-k-inp' class='form-control fs-16px' /> </span>
         <br>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verify_k();' id='act3-vf-btn1'>Verify</button>
      </div>
         
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act3-div');
    }, 150);
}
function a3_verify_k() {
    let k_inp = (document.getElementById('act3-k-inp'));
    console.log(k3);
    if (!verify_values(parseFloat(k_inp.value), k3)) {
        k_inp.style.border = '1px solid red';
        alert('Incorrect k value');
        return;
    }
    else {
        k_inp.style.border = '1px solid #ced4da';
        k_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-k-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <div class="fs-18px fb-500">
      $$ k = ${k3} $$
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

   <div id="act3-tb-box">
   </div>
   `;
    let header = ['t&darr; \\ x&rarr;', '0', '1', '2', '3', '4'];
    let vf_rows = [];
    let vf_cols = [];
    let tb_box = (document.getElementById('act3-tb-box'));
    if (table_data3.length > 2) {
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
    let tab = new Verify_Rows_Cols_Custom_Fixed_Update1(header, table_data3, vf_rows, vf_cols, '', tb_box, true, true, act3_complete, 3);
    tab.load_table();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function internal_calculation3() {
    let n;
    let t = 0;
    k3 = 0;
    table_data3 = [];
    k3 = lambda3 * a * Math.pow(h, 2);
    console.log(a, k3);
    if (14 % k3 != 0) {
        let temp1 = 0;
        while (temp1 < 14) {
            temp1 += k3;
        }
        let temp2 = temp1 - k3;
        if (Math.abs(14 - temp2) <= Math.abs(14 - temp1)) {
            dist_at3 = temp2;
        }
        else {
            dist_at3 = temp1;
        }
        n = dist_at3 / k3 + 1;
        for (let i = 0; i < n; i++) {
            let arr = [];
            for (let j = 0; j <= 5; j++) {
                if (j == 0) {
                    arr.push(t);
                    t += k3;
                }
                else if (j == 1 || j == 5) {
                    arr.push(0);
                }
                else if (i == 0) {
                    arr.push((j - 1) * (4 - (j - 1)));
                }
                else {
                    arr.push(lambda3 *
                        (table_data3[i - 1][j - 1] -
                            2 * table_data3[i - 1][j] +
                            table_data3[i - 1][j + 1]) +
                        table_data3[i - 1][j]);
                }
            }
            table_data3.push(arr);
        }
    }
    else {
        n = dist_at3 / k3 + 1;
        for (let i = 0; i < n; i++) {
            let arr = [];
            for (let j = 0; j <= 5; j++) {
                if (j == 0) {
                    arr.push(t);
                    t += k3;
                }
                else if (j == 1 || j == 5) {
                    arr.push(0);
                }
                else if (i == 0) {
                    arr.push((j - 1) * (4 - (j - 1)));
                }
                else {
                    arr.push(lambda3 *
                        (table_data3[i - 1][j - 1] -
                            2 * table_data3[i - 1][j] +
                            table_data3[i - 1][j + 1]) +
                        table_data3[i - 1][j]);
                }
            }
            table_data3.push(arr);
        }
    }
}
function act3_complete() {
    let div = (document.getElementById('act3-div'));
    div.innerHTML += `
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='load_question();' id='act3-btn1'>Next</button>
   `;
}
function load_question() {
    let btn = (document.getElementById('act3-btn1'));
    btn && btn.remove();
    let div = (document.getElementById('act3-div'));
    div.innerHTML += `
   <br>
   <div id="act3-q-box"></div>
   `;
    let q_box = (document.getElementById('act3-q-box'));
    let ques = new Question_Options('Is solution stable?', ['True', 'False'], '2', q_box, 'act3', exp_completed);
    ques.load_question();
    let ques_heading = document.querySelector('#act3-question-div h5');
    ques_heading.classList.remove('fs-16px');
    ques_heading.classList.add('fs-18px');
}
function exp_completed() {
    let btn = (document.getElementById('act3-btn1'));
    btn && btn.remove();
    alert('Correct response. Experiment Completed');
}
// activity3();
//# sourceMappingURL=activity3.js.map