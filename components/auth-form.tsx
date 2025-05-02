import Form from 'next/form';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from './ui/select'; // Import the necessary components

export function AuthForm({
  action,
  children,
  defaultEmail = '',
}: {
  action: NonNullable<
    string | ((formData: FormData) => void | Promise<void>) | undefined
  >;
  children: React.ReactNode;
  defaultEmail?: string;
}) {
  return (
    <Form action={action} className="flex flex-col gap-4 px-4 sm:px-16">


      <div className="flex flex-col gap-2">
        <Label
          htmlFor="email"
          className="text-zinc-600 font-normal dark:text-zinc-400"
        >
          Email Address
        </Label>
        <Input
          id="email"
          name="email"
          className="bg-muted text-md md:text-sm"
          type="email"
          placeholder="user@acme.com"
          autoComplete="email"
          required
          autoFocus
          defaultValue={defaultEmail}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label
          htmlFor="password"
          className="text-zinc-600 font-normal dark:text-zinc-400"
        >
          Password
        </Label>
        <Input
          id="password"
          name="password"
          className="bg-muted text-md md:text-sm"
          type="password"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label
          htmlFor="mfacode"
          className="text-zinc-600 font-normal dark:text-zinc-400"
        >
          MFA Code
        </Label>
        <Input
          id="mfacode"
          name="mfacode"
          className="bg-muted text-md md:text-sm"
          type="password" // Changed the type to "password"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label
          htmlFor="verticalslice"
          className="text-zinc-600 font-normal dark:text-zinc-400"
        >
          Persona Profile
        </Label>
        <Select name="verticalslice">
          <SelectTrigger className="bg-muted text-md md:text-sm">
            <SelectValue placeholder="Please Select ..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Care">Care</SelectItem>
            <SelectItem value="Commercial">Commercial</SelectItem>
            <SelectItem value="Education">Education</SelectItem>
            <SelectItem value="Government">Government</SelectItem>
            <SelectItem value="Health">Health</SelectItem>
            <SelectItem value="Housing">Housing</SelectItem>
            <SelectItem value="Logistics">Logistics</SelectItem>
            <SelectItem value="Legal">Legal</SelectItem>
            <SelectItem value="Retail">Retail</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {children}
    </Form>
  );
}