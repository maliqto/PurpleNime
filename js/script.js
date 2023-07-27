function redirecionarPagina(selectElement) {
    var selectedValue = selectElement.value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}