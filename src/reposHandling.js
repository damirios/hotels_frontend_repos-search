import { getValidationResult } from "./getValidationResult";
import { showError } from "./errorHandling";
import { hideLoadingBlock, showLoadingBlock } from './loadingBlockHandling';
import { constructQuery } from './utilities/constructQuery';
import { insertRepoToList } from "./utilities/insertRepoToList";
import { showNoReposFound } from "./utilities/showNoReposFound";
import { removeNoReposMessage } from "./utilities/removeNoReposMessage";

export async function getRepos(queryInput, filterSelect) {
    const query = queryInput.value;
    const qualifier = filterSelect.value;
    const queryURL = constructQuery(query, qualifier);

    return fetch(queryURL);
}

export function showReposList(reposResponse, queryInput, filterSelect) {
    if (reposResponse.items.length === 0) {
        showNoReposFound(queryInput.value, filterSelect.value);
        return;
    }

    const repos = reposResponse.items.slice(0, 10);
    const reposReduced = repos.map(repo => {
        return {
            name: repo.name,
            url: repo.html_url,
            owner: {
                login: repo.owner.login,
                url: repo.owner.html_url,
                avatar_url: repo.owner.avatar_url
            },
            forks_count: repo.forks_count,
            language: repo.language,
            description: repo.description
        }
    });

    reposReduced.forEach(repo => {
        insertRepoToList(repo);
    });
}

export function searchRepos(e) {
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

    removeNoReposMessage(); // убираем сообщение об отсутствии репозиториев, если оно есть
    clearReposList(); // очищаем список показываемых репозиториев
    showLoadingBlock(); // показываем надпись загрузки
    
    // получаем репозитории
    getRepos(queryInput, filterSelect)
    .then(response => response.json())
    .then(repos => showReposList(repos, queryInput, filterSelect))
    .catch(error => {
        console.log('error: ', error);
    })
    .finally(() => {
        hideLoadingBlock();
    })
}

export function clearReposList() {
    const reposList = document.querySelector('.repos__list');
    reposList.innerHTML = '';
}