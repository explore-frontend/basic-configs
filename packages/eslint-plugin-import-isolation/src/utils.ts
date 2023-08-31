// Credit: https://github.com/microsoft/vscode/blob/53d1dffaff509283d165f4d08e8ecd97956fc463/build/lib/eslint/utils.ts

import type * as eslint from 'eslint';
import type { TSESTree } from '@typescript-eslint/experimental-utils';

export function isRelative(importee: string) {
    return importee.startsWith('.') || importee.startsWith('..');
}

export function createImportRuleListener(
    validateImport: (node: TSESTree.Literal, value: string) => any,
): eslint.Rule.RuleListener {
    function _checkImport(node: TSESTree.Node | null) {
        if (node && node.type === 'Literal' && typeof node.value === 'string') {
            validateImport(node, node.value);
        }
    }

    return {
        // import ??? from 'module'
        ImportDeclaration: (node: any) => {
            _checkImport((<TSESTree.ImportDeclaration>node).source);
        },
        // import('module').then(...) OR await import('module')
        ['CallExpression[callee.type="Import"][arguments.length=1] > Literal']: (node: any) => {
            _checkImport(node);
        },
        // import foo = ...
        ['TSImportEqualsDeclaration > TSExternalModuleReference > Literal']: (node: any) => {
            _checkImport(node);
        },
        // export ?? from 'module'
        ExportAllDeclaration: (node: any) => {
            _checkImport((<TSESTree.ExportAllDeclaration>node).source);
        },
        // export {foo} from 'module'
        ExportNamedDeclaration: (node: any) => {
            _checkImport((<TSESTree.ExportNamedDeclaration>node).source);
        },
    };
}
