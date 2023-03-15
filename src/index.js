import { showError, hideError } from "./errorHandling";
import { getValidationResult } from "./getValidationResult";
import { getRepos, showReposList } from './reposHandling';
import { showLoadingBlock, hideLoadingBlock } from "./loadingBlockHandling";

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


async function searchRepos(e) {
    e.preventDefault();
    const searchForm = document.forms.search;
    const queryInput = searchForm.searchString;
    const filterSelect = searchForm.searchQualifier;

    let isAnyError = false;
    const queryValidationOptions = {min: 3, max: 32};
    const queryValidationResult = getValidationResult(queryInput, queryValidationOptions);
    if (!queryValidationResult.check) {
        isAnyError = true;
        showError(queryInput, queryValidationResult.error, queryValidationResult.errorValue, queryValidationOptions);
    }

    if (isAnyError) {
        e.preventDefault();
        return;
    }

    showLoadingBlock();
    getRepos(queryInput, filterSelect)
    .then(response => response.json())
    .then(repos => showReposList(repos))
    .catch(error => {
        console.log('error: ', error);
    })
    .finally(() => {
        hideLoadingBlock();
        console.log('finally');
    })
}