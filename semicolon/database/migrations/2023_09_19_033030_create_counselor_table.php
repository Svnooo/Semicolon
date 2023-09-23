<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('counselor', function (Blueprint $table) {
            $table->id();
            $table->string('username', 255);
            $table->string('password', 255); // Anda perlu enkripsi password sebelum menyimpannya
            $table->string('email', 255)->unique(); // Email harus unik
            $table->string('foto', 255)->nullable(); // Kolom foto boleh kosong
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('counselor');
    }
};
