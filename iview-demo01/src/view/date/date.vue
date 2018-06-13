<template>
    <div>
        <DatePicker type="date" placeholder="Select date" style="width:200px" @on-change="changeDate" ></DatePicker>
        <DatePicker type="daterange" v-model="date2" placeholder="Select date" style="width:200px" ></DatePicker>
        <span>{{date1}} ---  {{date2}}</span>
    </div>
</template>
<script>
export default {
    data(){
        return {
            date1:'',
            date2:''
        };
    },
    methods:{
        changeDate(dateTime) {
            console.log(dateTime)
            this.date1=dateTime
        }
    }
}
</script>

