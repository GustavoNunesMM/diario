<template>
    <div>
        <table>
            <tr class="title">
                <th v-for="(data, index) in dates" :key="index"> {{ data }}</th>
            </tr>
            <tr class="days">
                <td v-for="(content,index) in contents" :key="index" > {{ content }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contents: '',
            dates: '',
        }
    }
}
</script>