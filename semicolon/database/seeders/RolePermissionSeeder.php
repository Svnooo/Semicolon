<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolePermissionSeeder extends Seeder
{
    
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $p1 = Permission::create(['name'=>'delete-user']);
        $p2 = Permission::create(['name'=>'edit-user']);
        $p3 = Permission::create(['name'=>'review-user-result']);
        $p4 = Permission::create(['name'=>'edit-profile']);
        $p5 = Permission::create(['name'=>'do-test']);
        $p6 = Permission::create(['name'=>'register-counseling']);
        $p7 = Permission::create(['name'=>'checking-feature']);
        $p8 = Permission::create(['name'=>'checking-counselor-profile']);
        $p9 = Permission::create(['name'=>'giving-criticism-suggestion']);
        $p10 = Permission::create(['name'=>'make-counseling-schedule']);

        Role::create(['name'=>'counselor']);
        Role::create(['name'=>'user']);
        Role::create(['name'=>'admin']);

        $roleAdmin = Role::findByName('admin');
        $roleAdmin ->givePermissionTo(Permission::all());

        $roleUser = Role::findByName('user');
        $roleUser ->givePermissionTo($p3,$p4,$p5,$p6,$p7,$p8,$p9);

        $roleCounselor = Role::findByName('counselor');
        $roleCounselor ->givePermissionTo($p3,$p4,$p7,$p9,$p10);

        
    }
}
