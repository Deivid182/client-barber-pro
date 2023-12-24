<script setup lang="ts">
import Heading from '@/components/heading.vue';
import type { RegisterData } from '../types/types'
import authApi from '../services/auth-api'
import {useToast} from 'vue-toast-notification'
import { reset } from '@formkit/vue'

const toast = useToast({
  duration: 5000,
  position: 'top-right',
})

const handleSubmit = async (values: RegisterData) => {
  const { message, success } = await authApi.register(values)
  toast.open({
    message
  })
  if(success) {
    reset('registerForm')
  }
}

</script>
<template>
  <div class="space-y-4">
    <Heading title="Register" description="Create your account"/>

    <FormKit
      id="registerForm"
      type="form"
      :actions="false"
      @submit="handleSubmit"
    >
      <FormKit 
        type="text"
        label="First Name"
        name="firstName"
        placeholder="Doe"
        validation="required|length:3"
        :validation-messages="{
          required: 'First Name field is required',
          length: 'Input too short'
        }"
      />

      <FormKit 
        type="text"
        label="Last Name"
        name="lastName"
        placeholder="Doe"
        validation="required|length:3"
        :validation-messages="{
          required: 'Last Name field is required',
          length: 'Input too short'
        }"
      />

      <FormKit
        type="email"
        label="Email"
        name="email"
        placeholder="johndoe@mail.com"
        validation="required|email"
        :validation-messages="{
          required: 'Email is required',
          email: 'Invalid email address'
        }"
      />

      <FormKit
        type="password"
        label="Password"
        name="password"
        placeholder="Password at least 6 characters"
        validation="required|length:6"
        :validation-messages="{
          required: 'Password is required',
          length: 'Password must be at least 6 characters'
        }"
      />

      <FormKit
        type="password"
        label="Confirm Password"
        name="password_confirm"
        placeholder="Password at least 6 characters"
        validation="required|confirm"
        :validation-messages="{
          required: 'Password confirmation is required',
          confirm: 'Passwords does not match'
        }"
      />
      <FormKit type="submit" label="Continue" />
    </FormKit>
  </div>
</template>