
/* █░█ █ */ 
/* █▄█ █ */

/* Shows our little popup logo guy for a second, then hides him. */
function popup() {
    const input_text  = document.getElementById('input_text');
    const output_text = document.getElementById('output_text');

    output_text.innerHTML = input_text.value;
}
