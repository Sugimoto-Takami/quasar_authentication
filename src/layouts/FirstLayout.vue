<template>
    <div class="flex flex-center q-pa-md" style="max-width: 2000px; margin-top: 100px;">
        <div class="column items-center" style="width: 50%">
            <h3 class="items-center">認証ページ</h3>
            <div>新規登録がまだの方はこちら</div>
            <q-btn color="red" label="Register" :to="{ name: 'register' }" class="q-mb-md" size="xl" />
            <div>登録済みの方はこちら</div>
            <q-btn color="blue" label="Login" :to="{ name: 'login' }" size="xl" />
        </div>
    </div>
</template>
