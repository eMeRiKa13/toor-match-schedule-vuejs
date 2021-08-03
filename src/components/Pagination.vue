<template>
  <nav class="bg-white px-1 py-6 flex items-center justify-between border-t border-gray-200 sm:px-4" aria-label="Pagination">
    <div class="hidden sm:block">
      <p class="text-sm text-gray-700">
        Showing
        {{ ' ' }}
        <span class="font-medium">1</span>
        {{ ' ' }}
        to
        {{ ' ' }}
        <span class="font-medium">10</span>
        {{ ' ' }}
        of
        {{ ' ' }}
        <span class="font-medium">20</span>
        {{ ' ' }}
        results
      </p>
    </div>
    <div class="flex-1 flex justify-between sm:justify-end">
      <a href="#" class="relative inline-flex items-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
        Previous
      </a>
      <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
        Next
      </a>
    </div>
  </nav>
</template>
