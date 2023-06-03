import httpService from './http.service'
const todosEndepoint = 'todos/'
const todosService = {
    fetch: async () => {
        const { data } = await httpService.get(todosEndepoint, {
            params: {
                _page: 1,
                _limit: 10,
            },
        })
        return data
    },
    addTask: async () => {
        const { data } = await httpService.post(todosEndepoint, {
            title: 'new title',
            completed: false,
        })
        return data
    },
}
export default todosService

// Не знаю почему, но только первый запрос возвращает мне todo-шку с новым
// значением id (201), остальные задачи приходят с сервера с тем же id 201
// В оф документации jsonplaceholder написано: Значения идентификатора не изменяются.
// Любое idзначение в теле вашего запроса PUT или PATCH будет проигнорировано.
// Будет учитываться только значение, установленное в запросе POST, но только в том случае, если оно еще не занято.

//Не уверен, но по-моему так и должно быть (если программно не передавать новый id)
//т.к. данные на jsonplaceholder статичны и неизменяемы
