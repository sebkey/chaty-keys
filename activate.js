function activate() {
  const code = document.getElementById("code").value;
  const result = document.getElementById("result");

  if (!code) {
    result.textContent = "Please enter a code.";
    return;
  }

  result.textContent =
    "Activation code received:\n\n" +
    code +
    "\n\n(Supabase activation coming next)";
}
