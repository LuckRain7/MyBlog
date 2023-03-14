/**
 * struct TreeNode {
 *	int val;
 *	struct TreeNode *left;
 *	struct TreeNode *right;
 *	TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 * };
 */
class Solution {
public:
    /**
     * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
     *
     * 
     * @param preOrder int整型vector 
     * @param inOrder int整型vector 
     * @return TreeNode类vector
     */
    vector<TreeNode*> func(vector<int>& preOrder,int pl,int pr,vector<int>& inOrder,int il,int ir)
    {//工作函数，参数分别为前序遍历数组及前序遍历数组的左右边界，中序遍历数组及其左右边界。
        //本质是处理返回参数问题，就是传子树的前序遍历和中序遍历
       vector<TreeNode*> res;
        if(pl>pr)//如果左边界大于右边界，则返回空
        {
            res.push_back(nullptr);//此处情况对应，以叶子节点为root，可能的左右子树的构建，因为叶子节点左右都为空，所以只返回一个只有nullptr的数组。
            return res;
        }
       for(int i = il;i<=ir;++i)//查找中序遍历数组
       {
           if(inOrder[i] == preOrder[pl])//查找到根
           {
               vector<TreeNode*> left = func(preOrder,pl+1,pl+i-il,inOrder,il,i-1);//递归查找左子树
               vector<TreeNode*> right = func(preOrder,pl+i-il+1,pr,inOrder,i+1,ir);//递归查找右子树
               for(auto lc:left)
               {
                   for(auto rc:right)//遍历左孩子vector和右孩子vector
                   {
                       TreeNode* root_node = new TreeNode(preOrder[pl]);//创建根节点
                       root_node->left = lc;//组装根节点可能的左孩子和右孩子
                       root_node->right = rc;
                       res.push_back(root_node);//并将该根节点push进返回结果vector中
                   }
               }
           }
       }
        return res;//返回结果，该结果的含义应该是“以root为根的，所有可能的树的构建，的数组”
    }
    
    
    vector<TreeNode*> getBinaryTrees(vector<int>& preOrder, vector<int>& inOrder) {
        // write code here
        vector<TreeNode*> ans;
        ans = func(preOrder,0,preOrder.size()-1,inOrder,0,inOrder.size()-1);
        return ans;
    }
};