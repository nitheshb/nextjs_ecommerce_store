import { Eye, EyeOff } from 'lucide-react';
import { useState, FormEvent } from 'react';

interface SignInFormProps {
  onSubmit: (email: string, password: string) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="bg-white rounded-lg shadow-md w-80">
      <form onSubmit={handleSubmit} className="p-6">
        <h2 className="text-xl text-[#000] font-semibold mb-4">Sign in to your account</h2>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 top-6 pr-3 flex items-center"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Forgot password?
            </a>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition duration-200"
        >
          LOGIN →
        </button>
        
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">Dont have an account?</span>
        </div>
        
        <button
          type="button"
          className="mt-4 w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-200 flex items-center justify-center"
        >
          <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
          CONTINUE WITH GOOGLE
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
