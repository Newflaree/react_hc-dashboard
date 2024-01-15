// Layouts
import { AuthLayout } from '../ui/layouts';
// Views
import { AuthLoginView } from '../ui/views';


export const AuthLoginPage = () => {
  return (
    <AuthLayout>
      <AuthLoginView />
    </AuthLayout>
  );
}
