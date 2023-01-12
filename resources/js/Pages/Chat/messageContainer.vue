<template>
    <section class="message-container"> 
        <div class="h-96 w-full">
            <div class="h-full p2 flex flex-col-revers overflow-scroll">
                <!-- <MessageItem :message="message" /> -->
            </div>
        </div>
    </section>
</template>

<script>

export default {
    props: ['messages']
}

</script>
