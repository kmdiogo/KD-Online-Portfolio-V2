import rootRoutes from "@/router/routes/root-routes";
import personalRoutes from "@/router/routes/personal-routes";
import projectRoutes from "@/router/routes/project-routes";
import {RouteRecordRaw} from "vue-router";

interface FileTreeNode {
    label: string;
    directories: FileTreeNode[];
    files: RouteRecordRaw[];
    parent?: number;
}
export const tree: FileTreeNode = {
    label: 'Root',
    directories: [
        {
            label: 'Projects',
            directories: [
                /*{
                    label: 'NANI',
                    directories: [],
                    files: [AboutMeObj, SkillsObj, ExperienceObj,]
                }*/
            ],
            files: projectRoutes
        },
        {
            label: 'Kenny',
            directories: [],
            files: personalRoutes
        }
    ],
    files: rootRoutes
};

export function convertTreeToArray(
    node: FileTreeNode,
    parent: number|undefined = undefined,
    treeArray: FileTreeNode[] = []
) {
    treeArray.push({
        label: node.label,
        files: node.files,
        directories: [],
        parent: parent
    });

    const parentNode = treeArray.length-1;
    if (parent) {
        treeArray[parent].directories.push(treeArray[treeArray.length-1]);
    }
    for (let i=0; i < node.directories.length; i++) {
        convertTreeToArray(node.directories[i], parentNode, treeArray);

    }

}

