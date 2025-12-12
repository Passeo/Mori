import { Eye, EyeOff } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import logo from '../assets/MORI.svg';

interface AuthPageProps {
    mode: 'login' | 'register';
}

const AuthPage = ({ mode }: AuthPageProps) => {
    const navigate = useNavigate();
    const isLogin = mode === 'login';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Clear fields when mode changes
    useEffect(() => {
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setShowPassword(false);
        setShowConfirmPassword(false);
    }, [mode]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would implement actual auth logic
        console.log(`Submitting ${mode} form`);
        // redirect to home for demo
        navigate('/');
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen w-full bg-mori-dark flex flex-col items-center justify-center p-4"
        >
            {/* Logo */}
            {/* ... */}
            <div className="mb-8 cursor-pointer" onClick={() => navigate('/')}>
                <img src={logo} alt="MORI Logo" className="h-12 w-auto invert brightness-0 grayscale-0" style={{ filter: 'brightness(0) invert(1)' }} />
            </div>

            <div className="w-full max-w-[400px] bg-mori-dark border border-mori-purple/20 rounded-[20px] p-6 sm:p-8 shadow-2xl">
                {/* ... content ... */}
                <div className="text-center mb-6">
                    <h1 className="font-nobile text-3xl font-medium text-white mb-2">
                        {isLogin ? 'Log in' : 'Sign Up'}
                    </h1>
                    <p className="font-inter text-mori-purple text-sm">
                        {isLogin ? 'Welcome back to Mori' : 'Join the Mori community'}
                    </p>
                </div>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div className="flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2 duration-300">
                            <label className="font-inter text-xs font-semibold text-mori-lilac ml-1 uppercase tracking-wider">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                className="h-[48px] w-full rounded-[12px] bg-mori-deep/50 border border-mori-purple/30 px-4 font-inter text-white placeholder-mori-purple/60 outline-none focus:border-mori-lilac focus:ring-1 focus:ring-mori-lilac transition-all text-sm"
                            />
                        </div>
                    )}

                    <div className="flex flex-col gap-1.5">
                        <label className="font-inter text-xs font-semibold text-mori-lilac ml-1 uppercase tracking-wider">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="h-[48px] w-full rounded-[12px] bg-mori-deep/50 border border-mori-purple/30 px-4 font-inter text-white placeholder-mori-purple/60 outline-none focus:border-mori-lilac focus:ring-1 focus:ring-mori-lilac transition-all text-sm"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="font-inter text-xs font-semibold text-mori-lilac ml-1 uppercase tracking-wider">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="h-[48px] w-full rounded-[12px] bg-mori-deep/50 border border-mori-purple/30 px-4 font-inter text-white placeholder-mori-purple/60 outline-none focus:border-mori-lilac focus:ring-1 focus:ring-mori-lilac transition-all text-sm pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-mori-purple hover:text-white transition-colors cursor-pointer"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {!isLogin && (
                        <div className="flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2 duration-300">
                            <label className="font-inter text-xs font-semibold text-mori-lilac ml-1 uppercase tracking-wider">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm your password"
                                    className="h-[48px] w-full rounded-[12px] bg-mori-deep/50 border border-mori-purple/30 px-4 font-inter text-white placeholder-mori-purple/60 outline-none focus:border-mori-lilac focus:ring-1 focus:ring-mori-lilac transition-all text-sm pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-mori-purple hover:text-white transition-colors cursor-pointer"
                                >
                                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>
                    )}

                    {isLogin && (
                        <div className="flex justify-end">
                            <button type="button" className="font-inter text-xs text-mori-purple hover:text-mori-lilac transition-colors cursor-pointer">
                                Forgot password?
                            </button>
                        </div>
                    )}

                    <button
                        className="mt-2 h-[48px] w-full rounded-[12px] bg-white font-inter text-sm font-semibold text-black hover:bg-gray-200 transition-colors cursor-pointer active:scale-[0.98]"
                    >
                        {isLogin ? 'Log In' : 'Sign Up'}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="font-inter text-sm text-mori-purple">
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <Link to={isLogin ? '/register' : '/login'} className="text-mori-lilac hover:text-white font-medium transition-colors">
                            {isLogin ? 'Sign Up' : 'Log In'}
                        </Link>
                    </p>
                </div>

            </div>
            <div className="mt-8">
                <Link to="/" className="text-mori-purple text-sm hover:text-white flex items-center gap-2 transition-colors">
                    ← Back to Home
                </Link>
            </div>
        </motion.div>
    );
};

export default AuthPage;
