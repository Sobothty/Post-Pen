export function Card({title, body}) {
    return `
    <div class="border-1 p-10 shadow-md col-span-4">
        <h1 class="text-5xl">${title}</h1>
        <p>${body}</p>
      </div>
    `
}