"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  Video, Lightbulb, Link as LinkIcon, Folder, FileText, 
  LayoutTemplate, Download, Users, User, Zap, Settings, 
  ChevronDown, ChevronUp, Check, Plus
} from 'lucide-react';

export function Sidebar() {
  const [isWorkspaceMenuOpen, setIsWorkspaceMenuOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <>
      <aside className="w-[250px] bg-[#f4f4f5] h-screen flex flex-col p-6 gap-6 fixed left-0 top-0 border-r border-gray-200 overflow-y-auto">
        
        {/* Workspace Switcher */}
        <div className="relative">
          <button 
            onClick={() => setIsWorkspaceMenuOpen(!isWorkspaceMenuOpen)}
            className="flex items-center justify-between w-full p-2 bg-gray-200/60 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
              </div>
              <span className="font-semibold text-sm">PERFIL - MONGE</span>
            </div>
            {isWorkspaceMenuOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
          </button>

          {/* Workspace Dropdown */}
          {isWorkspaceMenuOpen && (
            <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden py-1">
              <button className="flex items-center gap-3 w-full p-3 text-left hover:bg-gray-50 transition-colors">
                <Check className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-medium text-gray-900">PERFIL - MONGE</span>
              </button>
              <div className="h-px bg-gray-100 mx-3 my-1"></div>
              <button 
                onClick={() => {
                  setIsWorkspaceMenuOpen(false);
                  setIsCreateModalOpen(true);
                }}
                className="flex items-center gap-3 w-full p-3 text-left hover:bg-gray-50 transition-colors text-gray-600"
              >
                <Settings className="w-4 h-4" />
                <span className="text-sm font-medium">Manage workspaces</span>
              </button>
            </div>
          )}
        </div>

        <nav className="flex flex-col gap-1">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2 mt-4">Research</div>
          <Link href="/videos" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-200/50">
            <Video className="w-4 h-4" /> Videos
          </Link>
          <Link href="/ideas" className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-200/50">
            <div className="flex items-center gap-3"><Lightbulb className="w-4 h-4" /> Ideas</div>
            <span className="bg-blue-100 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full">12</span>
          </Link>
          <Link href="/hooks" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-200/50 cursor-pointer">
            <LinkIcon className="w-4 h-4" /> Hooks
          </Link>
          <Link href="/collections" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-200/50 cursor-pointer">
            <Folder className="w-4 h-4" /> Collections
          </Link>

          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2 mt-6">Create</div>
          <Link href="/scripts" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-200/50 cursor-pointer">
            <FileText className="w-4 h-4" /> Scripts
          </Link>
          <Link href="/projects" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium bg-gray-200/50 text-gray-900">
            <LayoutTemplate className="w-4 h-4" /> Projects
          </Link>
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-200/50 cursor-pointer">
            <Download className="w-4 h-4" /> Exports
          </div>

          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2 mt-6">Setup</div>
          <Link href="/channels" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-200/50 cursor-pointer">
            <Users className="w-4 h-4" /> Channels
          </Link>
          <Link href="/persona" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-200/50">
            <User className="w-4 h-4" /> Persona
          </Link>
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-200/50 cursor-pointer">
            <Zap className="w-4 h-4" /> Automations
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-200/50 cursor-pointer">
            <Settings className="w-4 h-4" /> Settings
          </div>
        </nav>
      </aside>

      {/* Create Workspace Modal Overlay */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black/20 z-[100] flex items-center justify-center backdrop-blur-[1px]">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 m-4">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Create Workspace</h2>
            <p className="text-gray-500 text-sm mb-6">Give your new workspace a name.</p>
            
            <input 
              type="text" 
              placeholder="Workspace name" 
              className="w-full border-2 border-blue-500 rounded-lg p-3 text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 mb-8"
              autoFocus
            />
            
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setIsCreateModalOpen(false)}
                className="px-4 py-2 text-sm font-bold text-gray-900 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsCreateModalOpen(false)}
                className="px-6 py-2 text-sm font-bold text-white bg-blue-400 hover:bg-blue-500 rounded-lg transition-colors"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
