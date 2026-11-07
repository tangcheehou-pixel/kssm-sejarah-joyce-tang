import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { registerNewStudent } from '../services/db';

const GRADE_OPTIONS = [
  'Standard 4 (Tahun 4)',
  'Standard 5 (Tahun 5)',
  'Standard 6 (Tahun 6)',
  'Form 1 (Tingkatan 1)',
  'Form 2 (Tingkatan 2)',
  'Form 3 (Tingkatan 3)',
  'Form 4 (Tingkatan 4)',
  'Form 5 (Tingkatan 5)',
];

export const AdminNewStudentPage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [gradeLevel, setGradeLevel] = useState('Form 3 (Tingkatan 3)');
  const [startDate, setStartDate] = useState('2026-11-07');
  const [dailyMinutes, setDailyMinutes] = useState(90);
  const [accessPin, setAccessPin] = useState('');
  const [error, setError] = useState('');
  const [createdSlug, setCreatedSlug] = useState('');

  const handleNameChange = (val: string) => {
    setName(val);
    const autoSlug = val
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    setSlug(autoSlug);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('请输入学生姓名。');
      return;
    }
    const res = registerNewStudent({
      name,
      slug,
      accessPin,
      gradeLevel,
      activeSubjects: ['Sejarah'],
      startDate,
      dailyTargetMinutes: dailyMinutes,
    });
    if (!res.ok) {
      setError(res.error || '注册失败');
      return;
    }
    setError('');
    setCreatedSlug(res.student!.slug);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#F1F5F9', padding: '32px 16px' }}>
      <div
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          background: '#FFFFFF',
          borderRadius: '22px',
          padding: '28px',
          border: '2px solid #CBD5E1',
          boxShadow: '0 10px 30px rgba(15,23,42,0.08)',
        }}
      >
        <Link
          to="/admin"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#2563EB',
            textDecoration: 'none',
            fontWeight: 800,
            fontSize: '13.5px',
            marginBottom: '16px',
          }}
        >
          <ArrowLeft size={16} /> 返回家长监控中心 (/admin)
        </Link>

        <h1 style={{ margin: '0 0 6px', fontSize: '23px', fontWeight: 900, color: '#0F172A' }}>
          <UserPlus size={22} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          注册新学生专属独立教室 (1 Student = 1 Dedicated Portal)
        </h1>
        <p style={{ fontSize: '13.5px', color: '#475569', margin: '0 0 20px' }}>
          每位新注册的学生都会立即获得专属独立网址（<code>/portal/学生代号</code>）与完全隔离的数据库记录，绝不与其他学生混淆学习日志或排行榜。
        </p>

        {createdSlug ? (
          <div
            style={{
              background: '#ECFDF5',
              border: '2px solid #10B981',
              borderRadius: '16px',
              padding: '20px',
            }}
          >
            <div style={{ fontWeight: 900, fontSize: '17px', color: '#065F46' }}>
              <CheckCircle2 size={20} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
              已成功开通专属教室：/portal/{createdSlug}
            </div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '14px' }}>
              <button
                type="button"
                onClick={() => navigate(`/portal/${createdSlug}`)}
                style={{
                  background: '#2563EB',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '10px 18px',
                  fontWeight: 800,
                  cursor: 'pointer',
                }}
              >
                立即进入该学生专属教室
              </button>
              <button
                type="button"
                onClick={() => navigate('/admin')}
                style={{
                  background: '#0F172A',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '10px 18px',
                  fontWeight: 800,
                  cursor: 'pointer',
                }}
              >
                前往后台查看该学生面板
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontWeight: 800, fontSize: '13.5px', marginBottom: '4px' }}>
                学生姓名 (Nama Pelajar)
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => handleNameChange(e.target.value)}
                placeholder="例如：Ethan Lim"
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  border: '1.5px solid #CBD5E1',
                  fontSize: '14.5px',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 800, fontSize: '13.5px', marginBottom: '4px' }}>
                专属教室网址代号 (Portal Slug: /portal/{slug || 'student-slug'})
              </label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="ethan-lim"
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  border: '1.5px solid #CBD5E1',
                  fontSize: '14.5px',
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 800, fontSize: '13.5px', marginBottom: '4px' }}>
                  年级 (Darjah / Tingkatan)
                </label>
                <select
                  value={gradeLevel}
                  onChange={(e) => setGradeLevel(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '10px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '14px',
                  }}
                >
                  {GRADE_OPTIONS.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 800, fontSize: '13.5px', marginBottom: '4px' }}>
                  开课日期 (Tarikh Mula)
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '10px 12px',
                    borderRadius: '10px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '14px',
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 800, fontSize: '13.5px', marginBottom: '4px' }}>
                  每日规定有效学习分钟数
                </label>
                <input
                  type="number"
                  min={15}
                  max={240}
                  value={dailyMinutes}
                  onChange={(e) => setDailyMinutes(Number(e.target.value) || 90)}
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '10px 12px',
                    borderRadius: '10px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '14px',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 800, fontSize: '13.5px', marginBottom: '4px' }}>
                  学生登入密码 PIN（留空则免密直接进入）
                </label>
                <input
                  type="text"
                  value={accessPin}
                  onChange={(e) => setAccessPin(e.target.value)}
                  placeholder="可选，例如 1234"
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '10px 12px',
                    borderRadius: '10px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '14px',
                  }}
                />
              </div>
            </div>

            {error && (
              <div style={{ color: '#BE123C', fontWeight: 800, fontSize: '13.5px' }}>⚠️ {error}</div>
            )}

            <button
              type="submit"
              style={{
                marginTop: '6px',
                background: '#10B981',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '12px',
                padding: '13px 20px',
                fontSize: '15px',
                fontWeight: 900,
                cursor: 'pointer',
              }}
            >
              立即创建专属教室与独立数据库
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
