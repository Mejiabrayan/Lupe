'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useFormStatus } from 'react-dom';
import { BookingActions } from '@/app/book/actions';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useOptimistic } from 'react';

export default function BookingFormContent() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      action={async (data) => {
        try {
          await BookingActions(data);
          formRef.current?.reset();
        } catch (error) {
          console.error(error);
        }
      }}
      className='space-y-4 w-full max-w-md mx-auto'
    >
      <div>
        <Label
          htmlFor='email'
          className='block text-sm font-medium text-gray-700 dark:text-gray-300'
        >
          Email
        </Label>
        <div className='mt-1'>
          <Input
            id='email'
            name='email'
            type='email'
            placeholder='Enter your email'
            required
          />
        </div>
      </div>
      <div>
        <Label
          htmlFor='name'
          className='block text-sm font-medium text-gray-700 dark:text-gray-300'
        >
          Name
        </Label>
        <div className='mt-1'>
          <Input
            id='name'
            name='name'
            type='text'
            placeholder='Enter your name'
            required
          />
        </div>
        <FormTextArea />
      </div>
    </form>
  );
}

function FormTextArea() {
  const { pending } = useFormStatus();
  return (
    <>
      <Label
        htmlFor='message'
        className='block text-sm font-medium text-gray-700 dark:text-gray-300'
      >
        Message
      </Label>
      <div className='mt-1 space-y-2'>
        <Textarea
          id='project_description'
          name='project_description'
          placeholder='Briefly describe your project'
          required
          maxLength={300}
          disabled={pending}
        />

        <Button type='submit' disabled={pending}>
          Start your project
        </Button>
      </div>
    </>
  );
}
