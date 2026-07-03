import React from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Cpu,
  Smartphone,
  Globe,
  Database,
  Coffee,
  Terminal,
  Server,
  Layers,
  Wrench,
  Braces,
  Network,
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
}

interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export default function Skills() {
  const skillGroups: SkillGroup[] = [
    {
      category: 'Languages & Frameworks',
      icon: <Terminal className="w-5 h-5 text-violet-500" />,
      skills: [
        { name: 'C++', level: 85, icon: <Cpu className="w-4 h-4" />, color: 'bg-violet-600' },
        { name: 'C#', level: 80, icon: <Terminal className="w-4 h-4" />, color: 'bg-purple-600' },
        { name: 'Java', level: 80, icon: <Coffee className="w-4 h-4" />, color: 'bg-fuchsia-600' },
        { name: 'Python', level: 40, icon: <Code2 className="w-4 h-4" />, color: 'bg-amber-600' },
        { name: 'PHP', level: 80, icon: <Braces className="w-4 h-4" />, color: 'bg-rose-600' },
        { name: 'JavaScript', level: 80, icon: <Code2 className="w-4 h-4" />, color: 'bg-yellow-500' },
      ],
    },
    {
      category: 'Web & Mobile',
      icon: <Smartphone className="w-5 h-5 text-violet-500" />,
      skills: [
        { name: 'React Native', level: 80, icon: <Smartphone className="w-4 h-4" />, color: 'bg-violet-500' },
        { name: 'React Vite', level: 50, icon: <Code2 className="w-4 h-4" />, color: 'bg-fuchsia-500' },
        { name: 'HTML5', level: 90, icon: <Globe className="w-4 h-4" />, color: 'bg-orange-500' },
        { name: 'CSS3', level: 90, icon: <Layers className="w-4 h-4" />, color: 'bg-purple-500' },
        { name: 'Django', level: 50, icon: <Server className="w-4 h-4" />, color: 'bg-emerald-600' },
      ],
    },
    {
      category: 'Databases & Networking',
      icon: <Database className="w-5 h-5 text-violet-500" />,
      skills: [
        { name: 'MySQL', level: 85, icon: <Database className="w-4 h-4" />, color: 'bg-rose-500' },
        { name: 'Networking', level: 80, icon: <Network className="w-4 h-4" />, color: 'bg-emerald-500' },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-[#0a0a0a] border-y border-zinc-200/50 dark:border-slate-800/50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-zinc-50 tracking-tight mb-4">
            Skills
          </h2>
          <div className="h-1.5 w-16 bg-violet-600 dark:bg-violet-400 mx-auto rounded-full mb-4" />
          <p className="text-zinc-600 dark:text-slate-400">
            A comprehensive list of programming languages, libraries, databases, and mobile SDKs 
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="bg-white dark:bg-[#0d0d0d] p-6 rounded-2xl border border-zinc-200/60 dark:border-slate-800/60 shadow-md dark:shadow-black/20 hover:shadow-xl hover:border-zinc-300 dark:hover:border-slate-700 transition-all group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-zinc-100 dark:border-slate-800/40">
                <div className="p-2 bg-violet-50 dark:bg-violet-950/40 rounded-xl group-hover:scale-110 transition-transform">
                  {group.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-zinc-50">
                  {group.category}
                </h3>
              </div>

              {/* Skills Progress List */}
              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-1.5 font-medium text-zinc-800 dark:text-slate-300">
                        <span className="text-zinc-400 dark:text-slate-500">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                      <span className="font-mono text-xs text-zinc-500 dark:text-slate-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Track */}
                    <div className="h-2 w-full bg-zinc-100 dark:bg-[#050505] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                        className={`h-full rounded-full ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
