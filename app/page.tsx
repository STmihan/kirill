"use client";

import React, { useState } from 'react';
import { Trophy, Crosshair, TrendingUp, X, Check, Wallet, ArrowRight } from 'lucide-react';

export default function KirillLanding() {
    const [loanAmount, setLoanAmount] = useState<number>(5000);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const ddragonVer = "15.23.1";

    const champions = ["Aphelios", "Twitch", "Kaisa"];

    const winrate = 50.8;
    const deltaPerWeek = 0.8;

    const handleLend = () => {
        setIsModalOpen(true);
    };

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200">

            {/* --- NAVBAR --- */}
            <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
            KIRILL.
          </span>
                    <div className="flex gap-6 text-sm font-medium text-slate-500">
                        <a href="#about" className="hover:text-emerald-600 transition-colors">Обзор</a>
                        <a href="#stats" className="hover:text-emerald-600 transition-colors">Статистика</a>
                        <a href="#invest" className="text-emerald-600 hover:text-emerald-700 transition-colors">Инвестировать</a>
                    </div>
                </div>
            </nav>

            {/* --- HERO SECTION --- */}
            <section id="about" className="pt-32 pb-20 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wide">
                            <Trophy size={14} />
                            Emerald III • Top Tier Borrower
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                            Успех любит <br />
                            <span className="text-emerald-500">тишину и кэрри</span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-md leading-relaxed">
                            Кирилл — это не просто ADC. Это стиль жизни. Профессиональный подход к фарму крипов и чужих денежных средств.
                        </p>

                        <div className="flex gap-4 pt-4">
                            <button
                                onClick={() => document.getElementById('invest')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 transition-all flex items-center gap-2"
                            >
                                Занять ему денег <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Hero Image Container */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square">
                            {/* ЗАМЕНИТЕ SRC НА ПУТЬ К ФАЙЛУ С АПЕЛЬСИНАМИ */}
                            <img
                                src="/kirill/images/kirill-main.jpg"
                                alt="Кирилл Успешный"
                                className="object-cover w-full h-full transform hover:scale-105 transition duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- LOL STATS SECTION --- */}
            <section id="stats" className="py-20 bg-white border-y border-slate-100">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Лига Легенд</h2>
                        <p className="text-slate-500">Путь к даймонду через боль и тильт</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Rank Card */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-all shadow-sm hover:shadow-md">
                            <Trophy className="w-10 h-10 text-emerald-500 mb-4" />
                            <h3 className="text-xl font-bold mb-1">Emerald III</h3>
                            <p className="text-sm text-slate-500 mb-4">Текущий ранг</p>
                            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                                <div className="bg-emerald-500 h-full w-[65%]" />
                            </div>
                            <p className="text-xs text-right mt-2 text-emerald-600 font-mono">65 LP</p>
                        </div>

                        {/* Role Card */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-all shadow-sm hover:shadow-md">
                            <Crosshair className="w-10 h-10 text-rose-500 mb-4" />
                            <h3 className="text-xl font-bold mb-1">ADC Main</h3>
                            <p className="text-sm text-slate-500 mb-4">Позиция</p>
                            <div className="flex gap-[-10px]">
                                {champions.map((champ) => (
                                    <div key={champ} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-sm -mr-3 relative z-0 hover:z-10 hover:scale-110 transition-transform">
                                        <img
                                            src={`http://ddragon.leagueoflegends.com/cdn/${ddragonVer}/img/champion/${champ}.png`}
                                            alt={champ}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* KDA/Logic Card */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-all shadow-sm hover:shadow-md">
                            <TrendingUp className="w-10 h-10 text-blue-500 mb-4" />
                            <h3 className="text-xl font-bold mb-1">Winrate</h3>
                            <p className="text-sm text-slate-500 mb-4">Статистика сезона</p>
                            <div className="flex items-end gap-2">
                                <span className="text-4xl font-bold text-slate-800">{ winrate }%</span>
                                <span className="text-sm text-emerald-600 mb-1 pb-1 font-medium">+{deltaPerWeek}% за неделю</span>
                            </div>
                        </div>
                    </div>

                    {/* Screenshot Integration */}
                    <div className="mt-12 rounded-2xl overflow-hidden shadow-xl border border-slate-200 opacity-90 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* ЗАМЕНИТЕ SRC НА ПУТЬ К СКРИНШОТУ ПРОФИЛЯ */}
                        <img src="/kirill/images/lol-profile.jpg" alt="LoL Profile" className="w-full object-cover" />
                    </div>
                </div>
            </section>

            {/* --- CALCULATOR SECTION --- */}
            <section id="invest" className="py-24 px-4 bg-emerald-900 text-white relative overflow-hidden">
                {/* Decor circles */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-[128px] opacity-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 rounded-full blur-[100px] opacity-20 pointer-events-none" />

                <div className="max-w-3xl mx-auto relative z-10 text-center">
                    <div className="inline-block p-3 bg-emerald-800/50 rounded-2xl mb-6 backdrop-blur-sm border border-emerald-700/50">
                        <Wallet className="w-8 h-8 text-emerald-300" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Инвестируйте в Кирилла</h2>
                    <p className="text-emerald-200 text-lg mb-12 max-w-lg mx-auto">
                        Выберите сумму, которую вы хотите одолжить. Гарантия возврата — честное слово и Эмеральд ранг.
                    </p>

                    <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-emerald-500/30 shadow-2xl">
                        <div className="mb-8">
                            <label className="block text-emerald-200 text-sm font-medium mb-4 uppercase tracking-wider">
                                Сумма займа
                            </label>
                            <div className="text-5xl font-bold mb-6 font-mono">
                                {loanAmount.toLocaleString('ru-RU')} ₽
                            </div>

                            <input
                                type="range"
                                min="100"
                                max="100000"
                                step="100"
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(Number(e.target.value))}
                                className="w-full h-3 bg-emerald-900/50 rounded-lg appearance-none cursor-pointer accent-emerald-400 hover:accent-emerald-300 transition-all"
                            />
                            <div className="flex justify-between text-xs text-emerald-400 mt-2 font-mono opacity-60">
                                <span>100 ₽</span>
                                <span>100 000 ₽</span>
                            </div>
                        </div>

                        <button
                            onClick={handleLend}
                            className="w-full bg-emerald-400 hover:bg-emerald-300 text-emerald-950 text-xl font-bold py-5 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-emerald-400/20 active:scale-95"
                        >
                            Занять деньги
                        </button>
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="bg-slate-900 text-slate-500 py-8 text-center text-sm">
                <p>© 2025 Кирилл Corp. Все права (и долги) защищены.</p>
            </footer>

            {/* --- POPUP MODAL --- */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <div
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsModalOpen(false)}
                    />
                    <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full relative z-10 animate-[fadeIn_0.3s_ease-out]">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
                        >
                            <X size={24} />
                        </button>

                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Check className="w-8 h-8 text-emerald-600" />
                        </div>

                        <h3 className="text-2xl font-bold text-center text-slate-900 mb-2">
                            Успешно!
                        </h3>
                        <p className="text-center text-slate-600 mb-6">
                            Вы заняли <span className="font-bold text-emerald-600">{loanAmount.toLocaleString('ru-RU')} ₽</span> Кириллу.
                            <br/>
                            <span className="text-xs text-slate-400 mt-2 block">(Он обязательно вернет. Наверное.)</span>
                        </p>

                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="w-full bg-slate-900 text-white py-3 rounded-xl font-medium hover:bg-slate-800 transition-colors"
                        >
                            Отлично
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}

