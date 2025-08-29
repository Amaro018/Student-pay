<script setup lang="ts">

</script>

<template>
  <div class="hero bg-base-200 container mx-auto my-10 rounded-lg p-10">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          Welcome to Student Payment Portal
        </h1>
        <p class="py-6">
          Manage your payments easily and securely. Click below to create your payment ticket.
        </p>

        <button class="btn btn-primary" onclick="my_modal_1.showModal()">
          CREATE A TICKET
          <icon name="material-symbols:arrow-circle-right" size="24" />
        </button>
      </div>
    </div>

    <!-- Open the modal using ID.showModal() method -->
    <dialog id="my_modal_1" class="modal">
      <div class="modal-box">
        <h3 class="text-lg font-bold">
          Hello!
        </h3>
        <p class="py-4">
          Press ESC key or click the button below to close
        </p>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>
