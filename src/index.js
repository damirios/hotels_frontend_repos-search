import { hideError } from "./errorHandling";
import { searchRepos } from './reposHandling';

function main() {
    const searchForm = document.forms.search;
    searchForm.addEventListener('submit', searchRepos);

    const allInputs = document.querySelectorAll('input');
    allInputs.forEach(input => {
        input.addEventListener('input', () => {
            hideError(input);
        });
    });
}

main();